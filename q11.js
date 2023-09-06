"use strict";
//Greetings: Start with the array you used in Exercise 11,
// but instead of just printing each person’s name, print a message to them.
// The text of each message should be the same, 
//but each message should be personalized with the person’s name.
var names = [`Mohsin`, `Adnan`, `Asif`, `Mani`, `Zia`,];
//each member solo recive massage
console.log(`Hello ${names[0]} we go to messive work get ready`);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);
// console.log(names[4]);
for (let name of names) //use for loop to send massage each member speratorli
 {
    console.log(`Good Morning ${name}, I hope we done our project soon`);
}
