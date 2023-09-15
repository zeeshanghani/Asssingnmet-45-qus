// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
var str = "hello";
var str1 = "Hello";
console.log(str === str1); //false
console.log(str !== str1); //true
console.log(".....................");
var name = "HELLO WORLD";
var name1 = "hello world";
console.log(name.toLowerCase() === name1); //true
console.log("................................");
var num1 = 5;
var num = 7;
console.log(num1 === num); //false
console.log(num1 !== num); //true
console.log(num1 > num); //false
console.log(num1 < num); //true
console.log(num1 >= num); //false
console.log(num1 <= num); //true
console.log("--------------------");
//&& and || operator
var a = 5;
var b = 8;
var c = 9;
console.log(a < b && b < c); //true
console.log(a < b && c < b); //false
console.log(a < b || c < b); //true
console.log(b < a || c < b); //false
console.log(".......................");
//
var names = ["Adnan", "Mani", "Zeeshan", "shafi", "Mohsin"];
console.log(names.includes("bhutta")); //false
console.log(names.includes("mani")); //false
console.log(names.includes("Mani")); //true
console.log(".......................................");
export {};
// var names=["Adnan","Mani","Zeeshan","shafi","Mohsin"]
// var nam=names.filter
// for (let i = 0; i < names.length; i++) 
// {
//     const element = names[i];
// }
