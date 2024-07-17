var name = "some-name"
console.log("some message from javascript file")


//  conditions - if else statments
var TotalPrice = 19
var ShppingCost;

if (TotalPrice > 20) {
    ShppingCost = 0 
} else {
    ShppingCost = 5 
}
if (TotalPrice<=20) {
    ShppingCost = 5
} else {
    ShppingCost = 0
}

// below 10 Dolloers  => 5$ shipping const
// below  10 Dolloers  => 3$ shipping const
// otherwise => 0euro

// example 2

  if(TotalPrice<=10) {
    ShppingCost=5
} else if (TotalPrice<=20) {
    ShppingCost=3       
} else {
    ShppingCost=0 
} 


// combining  conditions - logical opearator
// if TotalPrice over $20 OR you have AmazonPrime
var TotalPrice = 22;
var AmazonPrime = true;

if(AmazonPrime || TotalPrice > 20){
    console.log("You are eligible for free shipment!");
} else {
    console.log("You are not eligible for free shipment.");
}


