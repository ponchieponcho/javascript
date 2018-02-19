// // Part 1 - Print Numbers
// var printNumbers = function (start,end) {
//     for (var count=1; count <=end;count++) {
//         console.log(count);
//     };
// };

// printNumbers(1,10);

// // Part 2 - Print a Square
// var printSquare = function (size) {
//     var ast = "*"
//     for (var length=0; length < size;length++){
//         console.log(ast.repeat(size));
//     };
// };

// printSquare(5);

// // Part 3 - Print a box
// var printBox = function (width, height) {
//     var ast = "*";
//     var space = " ";
//     console.log(ast.repeat(width));
//     for (var step=0;step < height;step++) {
//         console.log("*" + (space.repeat(width-2)) + "*");

//     };
//     console.log(ast.repeat(width));
// };

// printBox(6, 4);

// // Part 4 - Print a Banner
// var printBanner = function(text) {
//     var textLength = text.length;
//     var ast = "*";
//     console.log(ast.repeat(textLength+4));
//     console.log("* " + text + " *");
//     console.log(ast.repeat(textLength+4));
// };

// printBanner('Welcome to DigitalCrafts')

// Part 5 - Factor a Number
