var num = 2.54456343;
var result = Math.floor(num);
var result2 = Math.ceil(num);
var result3 = Math.round(num);
for (var i = 0; i < 6; i++){
    var dice = Math.random(num) * 6;
    var output = Math.round(dice);

    console.log(output);
}