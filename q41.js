// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
var magiciansNames = ["hamoon", "Zakoota", "Samari"];
function show_magicians(magicians) {
    for (var magician of magicians) {
        console.log(magician);
    }
}
// show_magicians(magiciansNames);
function make_great(magicians) {
    var greatmagician = [];
    for (var magician of magicians) {
        greatmagician.push(magician, "the great");
    }
    return greatmagician;
}
var greatmagician = make_great(magiciansNames);
show_magicians(greatmagician);
export {};
