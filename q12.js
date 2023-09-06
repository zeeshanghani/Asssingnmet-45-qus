"use strict";
/*Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.” */
let favorite_transp = [];
favorite_transp.push(["motercycle", "honda"]);
favorite_transp.push(["car", "tayota"]);
favorite_transp.push(["Bycycle", "china"]);
console.log(favorite_transp);
favorite_transp.forEach(([transport, brand]) => { console.log(`I would like to own ${brand} ${transport}.`); });
