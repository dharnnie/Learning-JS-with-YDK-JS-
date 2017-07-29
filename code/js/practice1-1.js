var reader = require("readline");

/*
    This is the extra step I took as Karl Adviced...
    Practice - Chapter 01 Page 36 | You don't know JS by Karl Max
    This trial uses allows you to set your variable for [TAX_RATE, PHONE_PRICE, ACCESORY_PRICE, SPENDING_THRESHOLD]
    
    
    Manipulate the spending treshold value to get different results or just run the upgraded file "practice1-1.js" to use your values

    Navigate to the folder that has this file and run "node practice1.js"
    - Daniel Osineye
*/
const TAX_RATE = 0.05;
// const PHONE_PRICE = 150000;
// const ACCESORY_PRICE = 15000;
// const SPENDING_THRESHOLD = 20000;
// var acctBalance = 1000000;

var PHONE_PRICE;
var ACCESORY_PRICE;
var SPENDING_THRESHOLD;
var acctBalance;

var tax = function(cost) {
    return TAX_RATE * cost;
}

// buy is synonymous to payment | It subtracts total amount you are spending(including accesories ... if applicable) from your  bank account! Spend wisely
function buy(amt) {
    console.log("Balance is :  ", acctBalance);
    acctBalance = acctBalance - (amt + tax(amt));
    console.log("Balance is :  ", acctBalance);
}

function setConstants() {
    console.log("I'll assume your tax rate is 0.05");
    // I'll treat them as constants, so I'll leave them in caps.
    PHONE_PRICE = prompt();
    ACCESORY_PRICE = prompt("Total cost of assesories you'll love to purchase");
    SPENDING_THRESHOLD = prompt("Mental Spending threshold: If you spend this once, you'll go crazy...");
    acctBalance = prompt("Account balance");
    console.log(PHONE_PRICE);
}

function purchase() {

    var totalPurchase = PHONE_PRICE + ACCESORY_PRICE;
    while (totalPurchase < acctBalance) {
        if (totalPurchase < SPENDING_THRESHOLD) {
            buy(totalPurchase);
            console.log("You have purchased a phone with accesories");
        } else {
            console.log("You have reached your spending threshold, you can't buy any accesories");
            buy(PHONE_PRICE);
        }
    }
}

purchase();