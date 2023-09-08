"use strict";
/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.*/
Object.defineProperty(exports, "__esModule", { value: true });
let gestArray = ["Adnan", "Asif", "Zeeshan", "Shafi", "Mani", "Mohsin"];
//step # 1 Print the name of person who cant make it.
let gestwhoCant = "Mohsin";
console.log(`${gestwhoCant} cant make it diner`);
//replace the Gest
let newGest = "Sabri";
let indexOfgestwhoCant = gestArray.indexOf(gestwhoCant);
if (indexOfgestwhoCant !== -1) {
    gestArray[indexOfgestwhoCant] = newGest;
}
console.log(gestArray[5]);
console.log("second set of invitation messeges");
gestArray.forEach((gest) => {
    console.log(`dear ${gest} you are invited to dinner`);
});
