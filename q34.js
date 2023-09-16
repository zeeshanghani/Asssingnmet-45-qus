// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
// list of Animals .............
var animalName = ["dog", "cat", "goat"];
// print each animal using for loop
console.log("-------List of Animal-----");
for (let animal of animalName) {
    console.log(animal);
}
console.log(".......statement about each animal.......");
for (let animal of animalName) {
    if (animal == "dog") {
        console.log(animal, "is great for protection");
    }
    else if (animal == "cat") {
        console.log(animal, "is beutiful animal");
    }
    else if (animal == "goat") {
        console.log(animal, "is given milk ");
    }
}
console.log("...................................... ");
console.log(" what these animals have in common");
console.log("these animals would make a great pet!");
export {};
