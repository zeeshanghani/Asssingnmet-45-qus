"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guestArray = ["Adnan", "Asif", "Zeeshan", "Shafi", "Mani", "Mohsin"];
console.log("Mohsin cant make it");
guestArray.splice(5, 5, "abri");
//console.log(guestArray);
guestArray.forEach((gest) => {
    console.log(`dear ${gest} you are invited`);
});
