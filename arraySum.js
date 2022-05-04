
function getArraySum(marks)
{
    var sum = 0;
    for (var i = 0; i < marks.length; i++){
        sum += marks[i];
    }
    return sum;
}
var marks = [45, 81, 13, 90, 33, 45, 87, 9, 97, 10, 10];
var result = getArraySum(marks);
console.log("Summetion of marks: " + result);