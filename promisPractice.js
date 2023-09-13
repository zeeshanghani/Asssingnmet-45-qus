"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let myPromise = new Promise((res, rej) => {
    console.log("promise Pending");
    setTimeout(() => {
        // console.log("promise res");
        // res(["Adnan","Asif","Ghani"])
        // console.log("promise reject");
        // rej (new Error("data reject"))
        var data = ["Adnan", "Asif", "Ghani"];
        // var data =""
        if (data) {
            console.log("Data Resolve");
            return res(data);
        }
        else {
            console.log("Data reject");
            return rej(new Error("Data not Recive"));
        }
    }, 2000);
});
myPromise.then((ra) => (console.log(ra))).catch((er) => (console.log(er)));
