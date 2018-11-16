const fs = require("fs")

fs.readFile("./32_fs_readfile.jss", "utf8", (err, data) => {
  if(err) throw err
  
  console.log("readFile:", data)
  console.log("readFile:", data.toString())
})

const data = fs.readFileSync("./32_fs_readfile.js", "utf8")
console.log("readFileSync:", data)