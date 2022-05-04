// function doubleIt(num) {
//     return num * 2;
// }
// const doubleIt = function (num) {
//     return num * 2;
// }
const doubleIt = num => num * 2;
const add = (x, y) => x + y;
const result = doubleIt(50);
console.log(result);
const result2 = add(4, 5);
console.log(result2);
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result3 = doMath(7, 5);
console.log(result3);