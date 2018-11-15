/*
 * argv
 * argv0
 * execArgv
 * execPath
 */ 

 const {
  argv,
  argv0,
  execArgv,
  execPath
 } = process

 argv.forEach(item => {
   console.log(item)
 });

//  node 10_argv.js
// node 10_argv.js --test a=1 b=2

console.log(argv0)