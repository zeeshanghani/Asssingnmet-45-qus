// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
type vehicaltype={
    name:string,
    wheel:number,
    condition:boolean,    
}
//Creat array of vehicals
let vehicalArray:vehicaltype[]=[];
let vehicle1=
{
    name:"honda Bike",
    wheel:2,
    condition:true, 
}
let vehicle2=

{
    name:"honda car",
    wheel:4,
    condition:false

}
vehicalArray.push(vehicle1)

vehicalArray.push(vehicle2)
console.log(vehicalArray);
