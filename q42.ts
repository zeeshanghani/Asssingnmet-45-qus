// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

var magiciansNames=["hamoon","Zakoota","Samari"]
function show_magicians(magicians:string[])
{
    for(var magician of magicians)
    {
        console.log(magician);
    }
}
// show_magicians(magiciansNames);
function make_great(magicians:string[])
{
    var greatmagician:string[]=[];
    for (var magician of magicians) 
    {
        greatmagician.push(magician,"the great");
    }
    return greatmagician;
}
show_magicians(magiciansNames)
 var greatmagician=make_great(magiciansNames)
show_magicians(greatmagician)