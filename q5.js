"use strict";
//Stripping Names: Store a person’s name, and include some whitespace characters 
//at the beginning and end of the name. Make sure you use each 
//character combination, "\t" and "\n", at least once. Print the name once, 
//so the whitespace around the name is displayed. 
//Then print the name after striping the white spaces.
Object.defineProperty(exports, "__esModule", { value: true });
let whitespace = "\t   Muhammad Zeeshan \n";
console.log("whitespace with Name is =", whitespace);
let strippedName = whitespace.trim();
console.log("strippedName is =", strippedName);
