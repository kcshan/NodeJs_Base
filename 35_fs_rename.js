const fs = require("fs")

fs.rename("./text", "test.txt", (err) => {
  if (err) throw err
  console.log("修改成功")
})