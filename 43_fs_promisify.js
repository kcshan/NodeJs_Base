const fs = require("fs")

const promisify = require("util").promisify

const read = promisify(fs.readFile)

read("./43_fs_promisify.js").then(data => {
  console.log(data.toString());
}).catch(ex => {
  console.log(ex);
})

test()