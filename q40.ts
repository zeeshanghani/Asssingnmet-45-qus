// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
var magiciansNames=["hamoon","Zakoota","Samari"]
function show_magicians(magicians:string[])
{
    for (let index = 0; index < magiciansNames.length; index++) {
        const element = magiciansNames[index];
        console.log(element);
    }
}
show_magicians(magiciansNames);