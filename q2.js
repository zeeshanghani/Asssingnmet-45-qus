"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Name Cases: Store a person’s name in a variable,
// and then print that person’s name in lowercase, uppercase, 
//and titlecase.
var nameLower = "zeeshan,Ghani,Shafi,mani";
// Print lowercase name
var lowerCasePerson = nameLower.toLocaleLowerCase();
console.log(lowerCasePerson);
// print upercase name
var uperCasePerson = nameLower.toUpperCase();
console.log(uperCasePerson);
// print title case 
var words = nameLower.split(",");
console.log(words);
var tiltleName = "";
for (let i = 0; i < words.length; i++) {
    tiltleName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + "  ";
}
console.log(tiltleName);
// export {};
var personName = "ZeeShan,GhaNi, AsIf,AdnAn,MaNi,ShaFi";
var lowercase = personName.toLowerCase(); //lowercase command
console.log(lowercase);
var upercase = personName.toUpperCase(); //upercase command
console.log(upercase);
//now we go to chang name in titlecase
var weGo = personName.split(","); // name go to array and cotted form + saprate each
console.log(weGo);
var titlecase = ","; //empty titlename in form ","
for (let i = 0; i < weGo.length; i++) {
    titlecase += weGo[i].charAt(0).toUpperCase() + weGo[i].slice(1).toLowerCase() + "  ";
    //empty titlecase weGo(var)sy first name ly gi + charAt(0)name ka 1st num ly ga .toUpperCase
    //os ko Capital kary ga phr (+wego)  name pr gaye gi or .slice(1).tolowercase ki command
    //baqi ilfaz ko lowercase mai ly ae gi (+"") names mai space dy gi
}
console.log(titlecase);
