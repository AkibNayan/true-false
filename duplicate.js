var id = [3, 5, 12, 53, 3, 2, 6, 2, 8, 20, 2, 43, 23, 12, 11, 10];
var uniqueId = [];
for (var i = 0; i < id.length; i++){
    var element = id[i];
    var index = uniqueId.indexOf(element);
    if (index == -1) {
        uniqueId.push(element);
    }
}
console.log(uniqueId);
