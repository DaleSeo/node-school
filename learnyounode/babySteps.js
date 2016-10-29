// var sum = 0;
// for (var i = 2; i < process.argv.length; i++) {
//   sum += Number(process.argv[i]);
// }
// console.log(sum);


// process.argv.slice(2)
//   .reduce((accum, val) => {
//     accum[0] += Number(val);
//     return accum
//   }, [0])
//   .forEach(val => console.log(val));


var res = process.argv.slice(2)
  .reduce((accum, val) => {
    accum += Number(val);
    return accum
  }, 0);
console.log(res);
