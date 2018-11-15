console.log("This is a Module")

const testVar = 100

function test() {
  console.log(testVar)
}

module.exports.testVar = testVar
module.exports.testFn = test