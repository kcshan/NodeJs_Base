const EventEmitter = require("events")

class CustomEvent extends EventEmitter {}

const ce = new CustomEvent()

ce.on("err",  (err, time) => {
  console.log(err)
  console.log(time)
})

ce.emit("err", new Error(" Error: oops"), Date.now())