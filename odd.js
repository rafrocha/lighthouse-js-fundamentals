function isOdd(num) {
  return num % 2 === 1;
}
console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));

function ageCalculator(name, yearOfBirth, currentYear){
  var age = currentYear - yearOfBirth;
  return name + " is " + age + " years old.";
}
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));

function howManyHundreds(number){
  var rem = number % 100;
  var num = (number - rem) / 100;
  return num;
}
console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);

var iceCreamFlavours = ["chocolate", "vanilla", "cookies and cream", "rocky road", "strawberry"];
console.log(iceCreamFlavours);

iceCreamFlavours.push("root beer");
console.log(iceCreamFlavours);

console.log(iceCreamFlavours[0]);

console.log(iceCreamFlavours[5]);

console.log(iceCreamFlavours.length);