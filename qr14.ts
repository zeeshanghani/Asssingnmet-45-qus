let guestArray:string[]=["Adnan","Asif","Zeeshan","Shafi","Mani","Mohsin"]
console.log("Mohsin cant make it");

guestArray.splice(5,5,"abri")
//console.log(guestArray);
guestArray.forEach((gest:string)=>{
    console.log(`dear ${gest} you are invited`);
    
})
export{}
