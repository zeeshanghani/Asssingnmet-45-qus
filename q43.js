// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function makeSandwich(...items) {
    console.log("sandwich Summary");
    if (items.length == 0) {
        console.log("Please select someone .Your order an empty");
    }
    else {
        console.log("You ordered a sandwich With the Following item");
        for (var item of items) {
            console.log(item);
        }
    }
}
makeSandwich("ham", "chease", "Lettuce", "Cheaken", "Patto");
makeSandwich("Crispy", "beaf");
makeSandwich();
export {};
