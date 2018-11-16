const fs = require("fs")

const content = Buffer.from("This is a text!")

fs.writeFile("./text", content, {
  encoding: "utf8"
}, (err) => {
  if (err) throw err

  console.log("写好了")
})