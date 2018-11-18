const fs = require("fs")

const read = promisify(fs.readFile)

async function test() {
  try {
    const content = await read("./43_fs_promisify.js")
    console.log(content.toString())
  } catch (error) {
    console.log(error);
  }
}

test()