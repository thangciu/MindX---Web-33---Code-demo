// var scope
for(var i = 0; i < 5; i++) {
    console.log(i);
}

// let scope
for(let i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
console.log(i)

function localScope() {
  var localVariable = 1;
}

console.log(localVariable)