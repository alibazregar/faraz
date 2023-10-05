const fs = require("fs")

fs.readFile("sortByCategory.json","utf-8",async(error,data)=>{
  const jsonObj  =JSON.parse(data)
  console.log(
    jsonObj[
      "لوازم جانبی , موبایل , کابل شارژ و آداپتور|لوازم جانبی|لوازم جانبی , موبایل"
    ].length
  );
  console.log(jsonObj.length)
})