const fs = require("fs")

fs.watch("./", {
  recursive: true
}, (eventType, fileName) => {
  console.log(eventType, fileName)
})
