function test1() {
  const a = parseInt(Math.random() * 10)
  const b = parseInt(Math.random() * 10)

  const c = test2(a, b)
}

function test2() {
  if (a > b) {
    a += a * 2
  } else {
    b -= a;
  }
  return a + b
}

test1();

// node --inspect-brk 14_debug.js
// chrome://inspect/#/devices