var marks = [45, 81, 13, 90, 33, 45, 87, 9, 97, 10];
var max = marks[0];
for (var i = 0; i < marks.length; i++){
    if (marks[i] > max) {
        max = marks[i];
    }
}
console.log(max);