/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = Number("5") - 2; // type converted the string "5" to a number
console.log("The result is: " + result); // now it is clear a number is being subtracted from another number

let booleanValue = "false"; //assigned string value of "false" to the variable booleanValue because "false" is truthy
let isValid = Boolean(booleanValue === "true"); // checking if string "false" equals string "true" which returns false
if (isValid) {
    console.log("This is valid!"); // nothing prints as a result
}

let age = Number("25"); // type converted the string "25" to a number
let totalAge = age + 5; // addition can now be performed between two numbers
console.log("Total Age: " + totalAge);

//// OWN CODE EXAMPLES ////

//___IMPLICIT TYPE CONVERSION___//

console.log("")

console.log("Implicit Type Conversion Example:")
let answer = "And the answer is: Number " + 7; // the number 7 is being converted to a string
console.log(answer);

console.log("After Fix:")
let answer2 = "And the answer is: Number " + String(7); // type converted number to a string first
console.log(answer2);

//___EXPLICIT TYPE CONVERSION___//

console.log("")

console.log("Explicit Type Conversion Example:")
let userInput = null; 
if (Boolean(userInput) === false) {                // converting userInput into a Boolean and checking if true/false
  console.log("Please Enter Username: ")           // null === false so evaluates to true and statment prints
}

console.log("")

