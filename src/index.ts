import axios from "axios";
import * as fs from "node:fs";
import csvParser from "csv-parser";
import { RawPost } from "./models/rawPost";
import { Image } from "./models/image";
import { InternalServerError } from "./models/internalServerError";
import sharp from "sharp";
import path from "path";
import * as ExcelJS from "exceljs";
//@ts-ignore
import mime from "mime"
function hasPropertyWithValue(arr: [], targetValue: string): boolean {
  return arr.some((element) => element["title"] === targetValue);
}
function hasPropertyWithId(arr: [], targetValue: number): boolean {
  return arr.some((element) => element["usedForId"] === targetValue);
}
async function downloadAndConvertToWebP(
  url: string,
  originalDestination: string,
  webpDestination: string
): Promise<number | void> {
  //console.log(originalDestination)
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
    fs.writeFileSync(originalDestination, Buffer.from(response.data), "binary");
    await sharp(response.data).toFile(webpDestination);
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
  console.log(resizedDestination, webpDestination);
  try {
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
    responseType: "arraybuffer",
  });
  const resizedImage = sharp(response.data).resize(40, 40);

  await resizedImage.toFile(resizedDestination);

  await resizedImage.toFormat("webp").toFile(webpDestination);

  const fileSize = fs.statSync(resizedDestination).size;

  console.log(
    "Download, Resize, and Conversion to WebP completed successfully!"
  );
  return fileSize;
    } catch (error) {
      console.error(
        "Error downloading, resizing, and converting photo:",
        (error as Error).message
      );
    }
}
function indexOfElementWithProperty(arr: any[], targetValue: string): number {
  const index = arr.findIndex((element) => element["title"] === targetValue);
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
          const title = row.post_name
          const index = indexOfElementWithProperty(
            resultArray,
            row.post_name as string
          );
          if (!index) {
            return;
          }
      
          const randomNumber = Math.floor(Math.random() * 9000) + 1000;
          const titleAddress = `./files/9515/gallery/product/timages/${resultArray[index].usedforid}/${resultArray[index].usedforid}_${
            randomNumber
          }${path.extname(imagesLink[0].link.replace(/\s+/g, ""))}`;

          const titleWebPAddress = `./files/9515/gallery/product/timages/${resultArray[index].usedforid}/webp/${resultArray[index].usedforid}_${
            randomNumber
          }.webp`;
          const size = await downloadAndConvertToWebP(
            imagesLink[0].link.replace(/\s+/g, ""),
            titleAddress.replace(/\s+/g, ""),
            titleWebPAddress.replace(/\s+/g, "")
          );
          let row0 = {
            usedforid: `${resultArray[index].usedforid}`,
            mime: mime.getType(path.extname(imagesLink[0].link)),
            path: path.join(titleAddress),
            size,
          };
          titlesSheet.addRow(row0);

          for (let imageObject of imagesLink) {
            const galleryAddress = `files/9515/gallery/timages/${
              //@ts-ignore
              imageObject.title
              //@ts-ignore
            }${path.extname(imageObject.link)}`;
            //@ts-ignore
            const galleryWebPAddress = `files/9515/gallery/timages/webp/${title.replace(
              /\s+/g,
              ""
            )}.webp`;
            const gallery4040Address = `files/9515/gallery/timages/${title.replace(
              /\s+/g,
              ""
            )}_40X40${path.extname(imageObject.link)}`;
            const gallery4040WebPAddress = `files/9515/gallery/timages/webp/${title.replace(
              /\s+/g,
              ""
            )}_40X40.webp`;
            const size = await downloadAndConvertToWebP(
              imageObject.link,
              galleryAddress.replace(/\s+/g, ""),
              galleryWebPAddress.replace(/\s+/g, "")
            );

            await downloadResizeAndConvertToWebP(
              imageObject.link,
              gallery4040Address.replace(/\s+/g, ""),
              gallery4040WebPAddress.replace(/\s+/g, "")
            );
            let row = {
              usedforid: `${resultArray[index].usedforid}`,
              name: title + path.extname(imageObject.link),
              filePath: path.join(galleryAddress),
              thumbnail: path.join(gallery4040Address),
              mime: mime.getType(path.extname(imageObject.link)),
              size,
              title: title,
              description: imageObject.desc,
              link: imageObject.link,
              alt: imageObject.alt,
            };
            console.log(row);
            gallerySheet.addRow(row);
          }
        } else {
          workbook.xlsx.writeFile("./files/farazSystemPhotos");
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
async function test(row: RawPost) {
  const workbook = new ExcelJS.Workbook();
  const titlesSheet = workbook.addWorksheet("title");
  const gallerySheet = workbook.addWorksheet("gallery");
  const titleColumns = ["usedforid", "mime", "path", "size"];
  //@ts-ignore
  const usedForId = row.usedForId;
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
  const jsonArray = await fs.promises.readFile("successfulfiles.json", "utf-8");
  const resultArray = JSON.parse(jsonArray);
  //@ts-ignore
  const imagesLink = row.images;
  const index = indexOfElementWithProperty(
    resultArray,
    row.post_name as string
  );
  if (!index) {
    return;
  }
  
  const randomNumber =Math.floor(Math.random() * 9000) + 1000
  const titleAddress = `./files/9515/gallery/product/timages/${usedForId}/${usedForId}_${
    randomNumber
    //@ts-ignore
  }${path.extname(imagesLink[0].link.replace(/\s+/g, ""))}`;

  const titleWebPAddress = `./files/9515/gallery/product/timages/${usedForId}/webp/${usedForId}_${
    randomNumber
    //@ts-ignore
  }.webp`;
  const size = await downloadAndConvertToWebP(
    //@ts-ignore
    imagesLink[0].link.replace(/\s+/g, ""),
    titleAddress.replace(/\s+/g, ""),
    titleWebPAddress.replace(/\s+/g, "")
  );
  let row0 = {
    usedforid: `${usedForId}`,
    //@ts-ignore
    mime: path.extname(imagesLink[0].link),
    path: titleAddress,
    size,
  };
  titlesSheet.addRow(row0);
  //@ts-ignore
  for (let imageObject of imagesLink) {
    const galleryAddress = `files/9515/gallery/timages/${
      //@ts-ignore
      imageObject.title
      //@ts-ignore
    }${path.extname(imageObject.link)}`;
    //@ts-ignore
    const galleryWebPAddress = `files/9515/gallery/timages/webp/${imageObject.title.replace(
      /\s+/g,
      ""
    )}.webp`;
    const gallery4040Address = `files/9515/gallery/timages/${
      //@ts-ignore
      imageObject.title
      //@ts-ignore
    }_40X40${path.extname(imageObject.link)}`;
    //@ts-ignore
    const gallery4040WebPAddress = `files/9515/gallery/timages/webp/${imageObject.title.replace(
      /\s+/g,
      ""
    )}_40X40.webp`;
    const size = await downloadAndConvertToWebP(
      //@ts-ignore
      imageObject.link,
      galleryAddress.replace(/\s+/g, ""),
      galleryWebPAddress.replace(/\s+/g, "")
    );

    await downloadResizeAndConvertToWebP(
      //@ts-ignore
      imageObject.link,
      gallery4040Address.replace(/\s+/g, ""),
      gallery4040WebPAddress.replace(/\s+/g, "")
    );
    let row = {
      usedforid: `${usedForId}`,
      //@ts-ignore
      name: imageObject.title + path.extname(imageObject.link),
      filePath: galleryAddress,
      thumbnail: gallery4040Address,
      //@ts-ignore
      mime: path.extname(imageObject.link),
      path: galleryAddress,
      size,
      //@ts-ignore
      title: imageObject.title,
      //@ts-ignore
      description: imageObject.desc,
      link: imageObject.link,
      //@ts-ignore
      alt: imageObject.alt,
    };
    console.log(row);
    gallerySheet.addRow(row);
  }
  await workbook.xlsx.writeFile("./files/farazSystemPhotos");    
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
// test({
//   usedForId: 2327004,
//   id: "137",
//   name: "هارد-اکسترنال-hd710-pro-1tb-ای-دیتا",
//   parent: 0,
//   content:
//     '<h2>معرفی هارد اکسترنال HD710 Pro 1TB ای‌دیتا</h2>\r\n<p style="text-align: justify"><a href="https://faraz-system.com/product-category/کامپیوتر/قطعات-اصلی/هارد-اکسترنال/" target="_blank" rel="noopener">هارد اکسترنال</a> HD710 Pro 1TB <a href="https://www.adata.com/en/specification/618" target="_blank" rel="noopener">ای‌دیتا</a> با ظرفیت یک ترابایت دارای بدنه از جنس پلاستیک سیلیکونی بوده که ضربه‌های وارد شده را دفع می‌کند. داخل این هارد اکسترنال<a href="https://www.adata.com/us/" target="_blank" rel="noopener"> ای‌دیتا</a> سنسور G Shock قرار دارد که مانع از آسیب هنگام ضربه و شوک می‌شود از این رو استاندارد نظامی MIL-STD-810G 516.6 را متعلق به خود کرده است. اتصال این هارد ای‌دیتا به وسیله کابل USB برقرار شده و با انواع سیستم‌عامل‌ها سازگار است. هارد اکسترنال یک ترابایتی HD710 Pro ای‌دیتا در چهار رنگ تولید شده و پورت USB روی آن به وسیله یک درپوش سیلیکنی همجنس با بدنه پوشانده می‌شود.</p>\r\n<p style="text-align: justify">همچنین میان تمامی وسایل و اجناسی که می‌خریم، سعی می‌کنیم وسایلی بخریم که مقاومت بالایی دارند. ساعتهایی می‌خریم که ضد آب باشند، گوشی‌هایی می‌خریم که ضدخش باشند و در برابر ضربه مقاوم، لباسهایی می‌خریم که برای یک مدت طولانی بتوانیم از آنها استفاده کنیم. برای خرید هارد هم می‌خواهیم هاردی بخریم که مقاوم باشد این هارد اکسترنال در برابر ضربه و افتادن از ارتفاع مقاوم است و در برابر شوک مقاوم بوده و ضدآب است و باعث از بین رفتن اطلاعات داده کاربران نمی‌شود. از یک طرف دیگری با استفاده از سنسور ضدشوک باعث جلوگیری از لرزش زیاد هارد می‌شود. زمانی که هارد دچار شوکهای الکتریکی یا لرزشهای بسیار شدیدی می‌شود که ممکن است باعث آسیب رساندن به هارد شود، سنسور ضدشوک روشن می‌شود. یکی دیگر از خصوصیات مهم این <a href="https://faraz-system.com/product-category/کامپیوتر/قطعات-اصلی/هارد-اکسترنال-1/" target="_blank" rel="noopener">هارد اکسترنال</a> HD710 Pro مقاومت آن در برابر گرد و غبار و آب است که به دلیل ساختار با کیفیت و مقاومی که به عنوان پوشش برای آن در نظر گرفته شده، نمی‌گذارد گرد‌و‌غبار به داخل این هارد وارد شود.</p>\r\n\r\n<h2>خصوصیت هارد External Adata</h2>\r\n<p style="text-align: justify">همچنین با درنظرگرفتن یک درپوش برای پورت USB روی این هارد، اقدامی برای حفظ ضدآب بودن هارد HD710 Pro است. درپوش کانکتور به‌ راحتی در جای خود محکم می‌شود و کاربر می‌تواند در زمان استفاده نکردن از هارد، این درپوش را در جای خود محکم کند. این مدل از هارد به ضربات متعدد و افتادن از ارتفاع بسیار مقاوم است. مقاومت این هارد به دلیل استفاده از سه لایه روکش سیلیکونی در بدنه آن بسیار زیاد است این طراحی فوق‌العاده باعث شده تا گرد و غبار و آب در این هارد نفوذ نکنند و باعث جلوگیری از خراب شدن آن شوند.</p>',
//   extraAttributes: {},
//   status: "publish",
//   password: "",
//   menuOrder: 2864,
//   date: "2020-12-27 14:16:14",
//   author: 1166,
//   commentStatus: "open",
//   sku: "SKU 649",
//   parentSku: "",
//   children: "",
//   downloadable: "yes",
//   virtual: "yes",
//   stock: "2",
//   regularPrice: 27020000,
//   salePrice: 0,
//   weight: "0.27",
//   length: "133",
//   width: "98",
//   height: "21",
//   taxClass: 0,
//   stockStatus: "instock",
//   visibility: "visible",
//   backorders: "false",
//   soldIndividually: false,
//   lowStockAmount: 0,
//   manageStock: true,
//   taxStatus: "none",
//   salePriceDatesFrom: "",
//   salePriceDatesTo: "",
//   //@ts-expect-error
//   images: [
//     {
//       link: "http://faraz-system.com/wp-content/uploads/2020/12/HD710-Pro-1TB_1.jpg ",
//       alt: " هارد اکسترنال HD710 Pro 1TB ای‌دیتا ",
//       title: " HD710-Pro-1TB_1 ",
//       desc: " هارد اکسترنال HD710 Pro 1TB ای‌دیتا ",
//       caption: " هارد اکسترنال HD710 Pro 1TB ای‌دیتا ",
//     },
//     {
//       link: " http://faraz-system.com/wp-content/uploads/2020/12/HD710-Pro-1TB_2.jpg ",
//       alt: " هارد اکسترنال HD710 Pro 1TB ای‌دیتا ",
//       title: " HD710-Pro-1TB_2 ",
//       desc: " هارد اکسترنال HD710 Pro 1TB ای‌دیتا ",
//       caption: " هارد اکسترنال HD710 Pro 1TB ای‌دیتا ",
//     },
//     {
//       link: " http://faraz-system.com/wp-content/uploads/2020/12/HD710-Pro-1TB_6.jpg ",
//       alt: " هارد اکسترنال HD710 Pro 1TB ای‌دیتا ",
//       title: " HD710-Pro-1TB_6 ",
//       desc: " هارد اکسترنال HD710 Pro 1TB ای‌دیتا ",
//       caption: " هارد اکسترنال HD710 Pro 1TB ای‌دیتا ",
//     },
//     {
//       link: " http://faraz-system.com/wp-content/uploads/2020/12/HD710-Pro-1TB_7.jpg ",
//       alt: " هارد اکسترنال HD710 Pro 1TB ای‌دیتا ",
//       title: " HD710-Pro-1TB_7 ",
//       desc: " هارد اکسترنال HD710 Pro 1TB ای‌دیتا ",
//       caption: " هارد اکسترنال HD710 Pro 1TB ای‌دیتا ",
//     },
//     {
//       link: " http://faraz-system.com/wp-content/uploads/2020/12/HD710-Pro-1TB_8.jpg ",
//       alt: " هارد اکسترنال HD710 Pro 1TB ای‌دیتا ",
//       title: " HD710-Pro-1TB_8 ",
//       desc: " هارد اکسترنال HD710 Pro 1TB ای‌دیتا ",
//       caption: " هارد اکسترنال HD710 Pro 1TB ای‌دیتا ",
//     },
//     {
//       link: " http://faraz-system.com/wp-content/uploads/2020/12/HD710-Pro-1TB_3.jpg ",
//       alt: " هارد اکسترنال HD710 Pro 1TB ای‌دیتا ",
//       title: " HD710-Pro-1TB_3 ",
//       desc: " هارد اکسترنال HD710 Pro 1TB ای‌دیتا ",
//       caption: " هارد اکسترنال HD710 Pro 1TB ای‌دیتا ",
//     },
//     {
//       link: " http://faraz-system.com/wp-content/uploads/2020/12/HD710-Pro-1TB_4.jpg ",
//       alt: " هارد اکسترنال HD710 Pro 1TB ای‌دیتا ",
//       title: " HD710-Pro-1TB_4 ",
//       desc: " هارد اکسترنال HD710 Pro 1TB ای‌دیتا ",
//       caption: " هارد اکسترنال HD710 Pro 1TB ای‌دیتا ",
//     },
//     {
//       link: " http://faraz-system.com/wp-content/uploads/2020/12/HD710-Pro-1TB_5.jpg ",
//       alt: " هارد اکسترنال HD710 Pro 1TB ای‌دیتا ",
//       title: " HD710-Pro-1TB_5 ",
//       desc: " هارد اکسترنال HD710 Pro 1TB ای‌دیتا ",
//       caption: " هارد اکسترنال HD710 Pro 1TB ای‌دیتا ",
//     },
//     {
//       link: " http://faraz-system.com/wp-content/uploads/2021/08/HD710-Pro-1TB_8.jpg ",
//       alt: " هارد اکسترنال HD710 Pro 1TB ای‌دیتا ",
//       title: " HD710-Pro-1TB_8 ",
//       desc: " هارد اکسترنال HD710 Pro 1TB ای‌دیتا ",
//       caption: " هارد اکسترنال HD710 Pro 1TB ای‌دیتا",
//     },
//   ],
//   downloadableFiles: [""],
//   productPageUrl:
//     "https://faraz-system.com/product/%d9%87%d8%a7%d8%b1%d8%af-%d8%a7%da%a9%d8%b3%d8%aa%d8%b1%d9%86%d8%a7%d9%84-hd710-pro-1tb-%d8%a7%db%8c-%d8%af%db%8c%d8%aa%d8%a7/",
//   totalSales: 86,
//   brand: "ای‌دیتا Adata",
//   type: "simple",
//   visiblility: "visible",
//   category: [
//     "کامپیوتر ",
//     " قطعات اصلی|کامپیوتر|کامپیوتر ",
//     " قطعات اصلی ",
//     " هارد اکسترنال",
//   ],
//   tags: ["هارد اکسترنال 1TB", "هارد اکسترنال Adata"],
//   warrantyKey: "",
//   warrantyValue: "",
// }).then(() => {
//   console.log("wwww");
// });
