// var raining = true;
// var cold = false;

// if (raining) {
//   console.log("Don't forget your umbrella!");
// }

// if (cold) {
//   console.log("Make sure you pick out a scarf!");
// }

// console.log("Now you're ready to go outside!");

// if (!raining) {
//   console.log("Leave your umbrella at home!");
// }

// if (temperature < -40 || temperature > 40) {
//   console.log("Maybe going outside isn't such a great idea…");
// }

// function whichSchool(age){
//   if (age < 13){
//     return "Elementary School";
//   } else if (age >= 13 && age <= 18) {
//     return "Middle School";
//   } else {
//     return "Lighthouse Labs";
//   }
// }

// console.log("I am 35. Which school should I go to?");
// console.log(whichSchool(35));
// console.log("I am 8. Which school should I go to?");
// console.log(whichSchool(8));
// console.log("I am 14. Which school should I go to?");
// console.log(whichSchool(14));

function calculateRectangleArea(length, width){
  var rectangle = length * width;
  if (length < 0 || width < 0){
    return undefined;
  }
  else {
    return rectangle;
  }
}
console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));

function calculateTriangleArea(base, height){
  var triangle = (base * height)/2;
  if (base < 0 || height < 0){
    return undefined;
  }
  else {
    return triangle;
  }
}

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

function calculateCircleArea(radius){
  if (radius < 0){
    return undefined;
  }
  else {
    var circle = Math.PI * radius * radius
    return circle;
  }
}

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined

























