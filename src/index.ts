import axios from "axios";
import * as fs from "node:fs";
import csvParser from "csv-parser";
import { RawPost } from "./models/rawPost";
import { Image } from "./models/image";
import { InternalServerError } from "./models/internalServerError";
import sharp from "sharp";
import path from "path";
import * as ExcelJS from "exceljs";

function hasPropertyWithValue(arr: [], targetValue: string): boolean {
  return arr.some((element) => element["title"] === targetValue);
}
async function downloadAndConvertToWebP(
  url: string,
  originalDestination: string,
  webpDestination: string
): Promise<number | void> {
    console.log(originalDestination)
  try {
    const originalDirectory = path.dirname(originalDestination);
    const webpDirectory = path.dirname(webpDestination);

    if (!fs.existsSync(originalDirectory)) {
      fs.mkdirSync(originalDirectory, { recursive: true });
    }

    if (!fs.existsSync(webpDirectory)) {
      fs.mkdirSync(webpDirectory, { recursive: true });
    }

    const response = await axios({
      method: "get",
      url: url,
      responseType: "arraybuffer",
    });
    console.log(response.data)
    await fs.promises.writeFile(originalDestination,response.data,"binary");
    await sharp(originalDestination).toFile(webpDestination);

    const fileSize = fs.statSync(originalDestination).size;

    console.log("Conversion to WebP completed successfully!");

    return fileSize;
  } catch (error) {
    console.error(
      "Error downloading and converting photo:",
      (error as Error).message
    );
  }
}

async function downloadResizeAndConvertToWebP(
  url: string,
  resizedDestination: string,
  webpDestination: string
): Promise<number | void> {
//   try {
    const resizedDirectory = path.dirname(resizedDestination);
    const webpDirectory = path.dirname(webpDestination);

    if (!fs.existsSync(resizedDirectory)) {
      fs.mkdirSync(resizedDirectory, { recursive: true });
    }

    if (!fs.existsSync(webpDirectory)) {
      fs.mkdirSync(webpDirectory, { recursive: true });
    }

    const response = await axios({
      method: "get",
      url: url,
      responseType: "stream",
    });
    console.log(response.data)
    // Resize the original image to your desired dimensions
    const resizedImage = sharp(response.data).resize(100, 100); // Adjust the dimensions as needed

    // Save the resized original image
    await resizedImage.toFile(resizedDestination);

    // Convert the resized original image to WebP
    await resizedImage.toFormat("webp").toFile(webpDestination);

    // Get the file size synchronously
    const fileSize = fs.statSync(resizedDestination).size;

    console.log(
      "Download, Resize, and Conversion to WebP completed successfully!"
    );

    return fileSize;
//   } catch (error) {
//     console.error(
//       "Error downloading, resizing, and converting photo:",
//       (error as Error).message
//     );
//   }
}
function indexOfElementWithProperty(
  arr: any[],
  targetValue: string
): number {
  const index = arr.findIndex(
    ((element) => element["title"] === targetValue)
  )
  return index;
}
function parseImage(string: string): Image[] {
  const images = string.split("|");
  let result: Image[] = [];
  images.forEach((image) => {
    let keyValues = image.split("!");
    let retVal: Image = {
      link: keyValues[0],
    };
    keyValues.shift();
    keyValues.forEach((keyValue) => {
      let array = keyValue.split(":");
      //@ts-ignore
      retVal[array[0]] = array[1];
    });
    result.push(retVal);
  });
  return result;
}

async function readExelAndMatchImages(address: string): Promise<void> {
  return new Promise(async (resolve, reject) => {
    const workbook = new ExcelJS.Workbook();
    const titlesSheet = workbook.addWorksheet("title");
    const gallerySheet = workbook.addWorksheet("gallery");
    const titleColumns = ["usedforid", "mime", "path", "size"];
    const galleryColumns = [
      "usedforid",
      "name",
      "filePath",
      "thumbnail",
      "mime",
      "title",
      "description",
      "link",
      "alt",
    ];
    titlesSheet.columns = titleColumns.map((column) => ({
      header: column,
      key: column,
      width: 15,
    }));
    gallerySheet.columns = galleryColumns.map((column) => ({
      header: column,
      key: column,
      width: 15,
    }));
    const jsonArray = await fs.promises.readFile(
      "successfulfiles.json",
      "utf-8"
    );
    const resultArray = JSON.parse(jsonArray);
    fs.createReadStream(address)
      .pipe(csvParser())
      .on("data", async (row: RawPost) => {
        if (hasPropertyWithValue(resultArray, row.post_name as string)) {
          const imagesLink = parseImage(row.images);
          const index = indexOfElementWithProperty(
            resultArray,
            row.post_name as string
          );
          if (!index) {
            return;
          }
          imagesLink.forEach(async (imageObject, imageIndex) => {
            if (imageIndex == 0) {
              const titleAddress = `./files/9515/gallery/product/timages/${
                resultArray[index].usedforid
              }/${resultArray[index].usedforid}_${
                Math.floor(Math.random() * 9000) + 1000
              }${path.extname(imageObject.link)}`;

              const titleWebPAddress = `./files/9515/gallery/product/timages/${
                resultArray[index].usedforid
              }/${resultArray[index].usedforid}_${
                Math.floor(Math.random() * 9000) + 1000
              }.${path.extname(imageObject.link)}`;
              const size = await downloadAndConvertToWebP(
                imageObject.link,
                titleAddress,
                titleWebPAddress
              );
              let row = {
                usedForId: resultArray[index].usedForId,
                mime: path.extname(imageObject.link),
                path: titleAddress,
                size,
              };
              console.log({title:row})
              titlesSheet.addRow(row);
            }

            const galleryAddress = `files/9515/gallery/timages/${
              imageObject.title
            }${path.extname(imageObject.link)}`;
            const galleryWebPAddress = `files/9515/gallery/timages/${imageObject.title}.webp`;
            const gallery4040Address = `files/9515/gallery/timages/${
              imageObject.title
            }_40X40${path.extname(imageObject.link)}`;
            const gallery4040WebPAddress = `files/9515/gallery/timages/${imageObject.title}_40X40.webp`;
            const size = await downloadAndConvertToWebP(
              imageObject.link,
              galleryAddress,
              galleryWebPAddress
            );
            
            await downloadResizeAndConvertToWebP(
              imageObject.link,
              galleryAddress,
              galleryWebPAddress
            );
            let row = {
              usedForId: resultArray[index].usedForId,
              name: imageObject.title + path.extname(imageObject.link),
              filePath: galleryAddress,
              thumbnail: gallery4040Address,
              mime: path.extname(imageObject.link),
              path: galleryAddress,
              size,
              title: imageObject.title,
              description: imageObject.desc,
              link: imageObject.link,
              alt: imageObject.alt,
            };
            console.log(row)
           gallerySheet.addRow(row);
           
          });
        } else {
            workbook.xlsx.writeFile("./files/farazSystemPhotos")
          return;
        }
      })
      .on("end", async () => {
        resolve();
      })
      .on("error", (error: Error) => {
        reject(new InternalServerError(error.message));
      });
  });
}
readExelAndMatchImages("./faraz.csv").then(()=>{
    console.log("done")
})
// downloadAndConvertToWebP(
//   "http://faraz-system.com/wp-content/uploads/2022/05/MSI-PRO-22XT-10M-All-in-One-1.jpg ",
//   "./result/1.jpg",
//   "./result/result1.webp"
// ).then(()=>{
//     console.log(1)
// });