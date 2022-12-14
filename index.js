function receivesAFunction(callback) {
  return callback();
}

function returnsANamedFunction() {
  function callback() {}
  return callback;
}

function returnsAnAnonymousFunction() {
  return function () {};
}
