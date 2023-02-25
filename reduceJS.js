//let a = [22, 33, 44];

//let b = a.reduce((accum, item) => {
//  accum = accum + item;
//  return accum;
//});
//console.log("=========");
//console.log(b);

let a = [4, -5, 7, -6, 2];

let b = a.reduce((accum, item) => {
  if (item > 0) {
    accum += item;
  }
  return accum;
});
console.log("=========");
console.log(b);
