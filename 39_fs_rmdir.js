const fs = require("fs")

fs.rmdir("test", (err) => {
  if (err) throw err
  console.log("删除成功")
})