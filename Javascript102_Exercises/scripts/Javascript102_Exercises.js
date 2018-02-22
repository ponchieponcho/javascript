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

// // Part 5 - Factor a Number
// var factors = function (givenNumber) {
//     var factorArray = []
//     for (var count=1; count < givenNumber;count++) {
//         if (givenNumber%count==0) {
//             factorArray.push(count);
//         };
//     };
//     return factorArray;
// };

// var factorMsg = factors(120);
// console.log(factorMsg);

// // Part 6 - Caesar Cipher 
// var str = 'Caesar Cipher';

// var caesarCipher = function (str, offset){  
//     // splits up array into letters
//   var charArray = str.split('');

//   var shiftChar = function (char){
//     var isAlpha = /[a-z]/i;

//     if(isAlpha.test(char)){
//       char = String.fromCharCode(char.charCodeAt(0) + offset);
//       if(char > 'Z' && char < 'a' || char > 'z')
//         char = String.fromCharCode(char.charCodeAt(0) - 26);
//     }
//     return char;
//   }
//   var result = charArray.map( shiftChar ).join('');  
//   return result;
// }

// console.log(caesarCipher( "Genius without education is like silver in the mine", 2));

// Part 7 - Caesar Cipher 2

// // Part 8 - Leetspeak
// var leetspeak = function (str) {
//     var charArray = str.split('');
//     for (var i=0;i<charArray.length;i++){
//         if (charArray[i]=='A' || charArray[i]=='a') {
//             charArray[i]=4;
//         } else if (charArray[i]=='E' || charArray[i]=='e') {
//             charArray[i]=3;
//         } else if (charArray[i]=='G' || charArray[i]=='g') {
//             charArray[i]=6;
//         } else if (charArray[i]=='L' || charArray[i]=='l') {
//             charArray[i]=1;
//         } else if (charArray[i]=='O' || charArray[i]=='o') {
//             charArray[i]=0;
//         } else if (charArray[i]=='S' || charArray[i]=='s') {
//             charArray[i]=3;
//         } else if (charArray[i]=='T' || charArray[i]=='t') {
//             charArray[i]=7;
//         };
//     };
//     charArray=charArray.join('');
//     return charArray;    

// };

// var leetMsg =  leetspeak('Leet');
// console.log(leetMsg);

// // Part 9 - Long-long Vowels
// var longLongVowels = function (str) {
//     if(str.search(/[o]/) > 0) {
//         console.log(str.search(/[o]/));
//         var newStr = str.replace('o', 'o'.repeat(4));
//     } else if (str.search(/[a]/) > 0) {
//         var newStr = str.replace('a', 'a'.repeat(4));
//     } else if (str.search(/[e]/) > 0) {
//         var newStr = str.replace('e', 'e'.repeat(4));
//     } else if (str.search(/[i]/) > 0) {
//         var newStr = str.replace('i', 'i'.repeat(4));
//     } else if (str.search(/[u]/) > 0) {
//         var newStr = str.replace('u', 'u'.repeat(4));
//     } else {
//         var newStr = str
//     };
//     return newStr
// };

// vowelMsg = longLongVowels('Cheese');
// console.log(vowelMsg);

// // Part 10 - Sum the numbers
// var sumNumbers = function(givenArray) {
//     var totalSum = 0
//     for (var i = 0;i<givenArray.length;i++) {
//         totalSum = totalSum + givenArray[i];
//     };
//     return totalSum;
// };

// var sumMsg = sumNumbers([1,4,8]);
// console.log(sumMsg);

// Part 11 - Just the positives
// Part 12 - Matrix Addition 
// Part 13 - Matrix Multiplication

// Part 14 - Rock Paper Scissors
// var rockPaperScissors = function(playerOneThrow,playerTwoThrow){
// var winner = ""
// if (playerOneThrow=='rock') {
//     if (playerTwoThrow=='rock') {
//     winner = 'draw'
//     } else if (playerTwoThrow=='scissors') {
//     winner = 'player 1'
//     } else if (playerTwoThrow=='paper') {
//     winner = 'player 2'
//     } }
// if (playerOneThrow=='scissors') {
//     if (playerTwoThrow=='rock') {
//         winner = 'player 2'
//     } else if (playerTwoThrow=='scissors') {
//         winner = 'draw'
//     } else if (playerTwoThrow=='paper') {
//         winner = 'player 1'
//     } }
// if (playerOneThrow=='paper') {
//     if (playerTwoThrow=='rock') {
//         winner = 'player 1'
//     } else if (playerTwoThrow=='scissors') {
//         winner = 'player 2'
//     } else if (playerTwoThrow=='paper') {
//         winner = 'draw'
//     } }
//     return winner;
// };

// var gameMsg = rockPaperScissors('rock', 'scissors');
// console.log(gameMsg);
// var gameMsg = rockPaperScissors('rock', 'paper');
// console.log(gameMsg);
// var gameMsg = rockPaperScissors('paper', 'paper');
// console.log(gameMsg);
