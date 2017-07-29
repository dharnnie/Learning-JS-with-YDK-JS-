/*
    Practice - Chapter 01 Page 36 | You don't know JS by Kyle
    This trial uses pre-defined constants [TAX_RATE, PHONE_PRICE, ACCESORY_PRICE, SPENDING_THRESHOLD]
    
    The other file "practice1-1.js" allows you to recieve input... Took the extra step like Kyle adviced
    Manipulate the spending treshold value to get different results or just run the upgraded file "practice1-1.js" to use your values

    Navigate to the folder that has this file and run "node practice1.js"
    - Daniel Osineye
*/
const TAX_RATE = 0.05;
const PHONE_PRICE = 150000;
const ACCESORY_PRICE = 15000;
const SPENDING_THRESHOLD = 20000;
var acctBalance = 1000000;

var tax = function(cost) {
    return TAX_RATE * cost;
}

// buy is synonymous to payment | It subtracts total amount you are spending(including accesories ... if applicable) from your  bank account! Spend wisely
function buy(amt) {
    console.log("Balance is :  ", format(acctBalance));
    acctBalance = acctBalance - (amt + tax(amt));
    console.log("Balance is :  ", format(acctBalance));
}

function format(amt) {
    return "$" + amt.toString();
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