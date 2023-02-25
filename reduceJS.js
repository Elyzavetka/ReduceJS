let a = [22, 33, 44];

let b = a.reduce((accum, item) => {
  accum = accum + item;
  return accum;
});
console.log("=========");
console.log(b);
