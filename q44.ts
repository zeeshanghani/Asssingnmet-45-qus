// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function crcar(manufacturer:string,model:string,...properties:[string,any][]):any{
    var car:any={manufacturer,model,};
    for(var[key,value]of properties){
        car[key]=value;
    }
    return car
}
var mycar:string=crcar("toyota","Corolla",["Color","red"],["opt feature","Sunroof"]);
console.log(mycar);
