const fs = require("fs")
      function sort_by_id() {
        return function (elem1, elem2) {
          if (elem1.id < elem2.id) {
            return -1;
          } else if (elem1.id > elem2.id) {
            return 1;
          } else {
            return 0;
          }
        };
      }
fs.readFile("successfulFiles.json","utf-8",async(error,data)=>{
  const jsonObj  =JSON.parse(data)
  const sorted = JSON.stringify(jsonObj.sort(sort_by_id()))
await fs.promises.writeFile("sorted.json",  sorted);

})