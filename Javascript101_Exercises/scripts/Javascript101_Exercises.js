// // Part 1 - Hello, you!
// function hello(name) {
//     console.log('Hello, ' + name + '!');
//   };

//   hello('Mustache');

// // Part 2 - Hello, you! Part 2
// function hello(name) {
//     if (name=='' || name==null) {
//         console.log('Hello, world!');
//     } else {
//     console.log('Hello, ' + name + '!');
//   }
// };

//   hello();

// // Part 3 - Madlib
// var madlib = function (name, subject) {
//     var msg = '';
//     msg = name + "'s favorite subject in school is " + subject;
//     return msg;
// };

// var madlibmsg = madlib('Anushka', 'art');
// console.log(madlibmsg);

// // Part 4 - Tip Calculator
// var tipAmount = function (amount, service) {
//     var totalTipAmount
//     if (service=='good') {
//         totalTipAmount = (amount * .2);
//         return totalTipAmount;
//     } else if (service=='fair') {
//         totalTipAmount = (amount * .15);
//         console.log(totalTipAmount)
//     } else if (service=='bad') {
//         totalTipAmount = (amount * .1);
//         console.log(totalTipAmount)
//     };
// };

// var tipMsg = tipAmount(100, 'good');
// console.log(tipMsg);

// // Part 5 - Tip Calculator 2
// var tipAmount = function (amount, service) {
//     var totalTipAmount
//     if (service=='good') {
//         totalTipAmount = (amount * .2);
//         return totalTipAmount;
//     } else if (service=='fair') {
//         totalTipAmount = (amount * .15);
//         return totalTipAmount;
//     } else if (service=='bad') {
//         totalTipAmount = (amount * .1);
//         return totalTipAmount;
//     };
// };

// var totalAmount = function (amount, service) {
//     var tip = tipAmount(amount, service);
//     var tipPlusTotal = amount + tip;
//     return tipPlusTotal;
// };

// var totalMsg=totalAmount(40, 'fair');
// console.log(totalMsg)

// Part 5 - Tip Calculator 3
var tipAmount = function (amount, service) {
    var totalTipAmount
    if (service=='good') {
        totalTipAmount = (amount * .2);
        return totalTipAmount;
    } else if (service=='fair') {
        totalTipAmount = (amount * .15);
        return totalTipAmount;
    } else if (service=='bad') {
        totalTipAmount = (amount * .1);
        return totalTipAmount;
    };
};

var totalAmount = function (amount, service) {
    var tip = tipAmount(amount, service);
    var tipPlusTotal = amount + tip;
    return tipPlusTotal;
};

var totalMsg=totalAmount(40, 'fair');
console.log(totalMsg)


