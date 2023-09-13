"use strict";
//Guest List: If you could invite anyone, living or deceased, to dinner,
// who would you invite? Make a list that includes at least three people 
//you’d like to invite to dinner. Then use your list to print a message to each person, 
//inviting them to dinner.
Object.defineProperty(exports, "__esModule", { value: true });
exports.gestArray = void 0;
let gestArray = ["Adnan", "Asif", "Zeeshan", "Shafi", "Mani", "Mohsin"];
exports.gestArray = gestArray;
//loop for each to print inven
gestArray.forEach((Nae) => {
    console.log(`Dear ${Nae},you are invited to dinner . Please join us.`);
});
