"use strict";
/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/
/*
let gestArrayN: string[] = ['Sajjad',  'Adnan','Asif',    'Naveed','Zeeshan', 'Shafi','Mani',    'Mohsin','Raheem']
console.log(gestArrayN);
console.log("====================================");
console.log("sorry i can invite only two guest");
while(gestArrayN.length > 2){
    let removeGest=gestArrayN.pop()
    console.log("Sorry",removeGest , "I can't invite you on dinner");
    }
    console.log("==================================================");
for(let gest of gestArrayN){
    console.log("Hello",gest,"Sir You are still invited")
}
console.log("========================================================")
gestArrayN.pop()
gestArrayN.pop()
console.log("New List Of guest after Diner",gestArrayN);*/
Object.defineProperty(exports, "__esModule", { value: true });
var car = [{
        company: "Honda",
        color: "Black",
        carface: "reglar",
        year: 2022
    },
    {
        company: "Tayota",
        color: "Black",
        carface: "reglar",
        year: 2021
    },
    {
        company: "Kia",
        color: "Gray",
        carface: "Luxary",
        year: 2023
    },
    {
        company: "Suzuki",
        color: "Black",
        year: 2020
    },
    {
        company: "BMW",
        color: "Black",
        carface: "Luxary",
        year: 2023
    }
];
for (let i = 0; i < car.length; i++) {
    var printcar1 = [car[i].company, car[i].carface, car[i].year];
    // console.log(printcar1);
    if (car[i].color == "Black") {
        console.log("car=", car[i].company, car[i].color);
    }
}
