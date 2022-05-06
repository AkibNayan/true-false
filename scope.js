let bonus = 20;
function sum(first, second) {
    const result = first + second+bonus;
    //Global Scope
   // console.log(bonus);
    if (result > 9) {
        var mood = "happy";
        console.log(mood);
    }
    //hoist
    console.log(mood);
    return result;
}
const output = sum(3, 7);
//console.log(bonus);
//console.log(output);
