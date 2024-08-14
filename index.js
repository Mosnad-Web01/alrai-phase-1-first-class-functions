function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  return function named() {
    console.log("This is a test.");
  };
}

function returnsAnAnonymousFunction() {
  return function () {
    console.log("The test has passed.");
  };
}
