function receivesAFunction (callback) {
  callback ();
}

function returnsANamedFunction () {
  function namedFunction () {
    console.log ("name z")
  } return namedFunction
}

function returnsAnAnonymousFunction () {
  return function () {
    console.log ("anonymous x")
  }
}