/*Seeing the World: Think of at least five places in the world you’d like to visit.
1• Store the locations in a array. Make sure the array is not in alphabetical order.
2•Print your array in its original order.
3•Print your array in alphabetical order without modifying the actual list.
4• Show that your array is still in its original order by printing it.
5• Print your array in reverse alphabetical order without changing the order of the original list.
6• Show that your array is still in its original order by printing it again.
7• Reverse the order of your list. Print the array to show that its order has changed.
8• Reverse the order of your list again. Print the list to show it’s back to its original order.
9• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
10• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
//step 1
var travelworld = ["china", "eng", "Madina", "UK", "India"];
console.log("print your array original order");
console.log(travelworld);
console.log("====reverse alphabetical order without changing the order===");
console.log([...travelworld].sort());
console.log("your array is still in its original order");
console.log(travelworld);
console.log(" \n reverse alphabetical order without changing the order");
console.log([...travelworld].sort().reverse());
console.log("your array is still in its original order by printing");
console.log(travelworld);
console.log("Reverse the order of your list. show that its order has changed");
travelworld.reverse();
console.log(travelworld);
console.log("\n Back to Original Array");
travelworld.reverse();
console.log(travelworld);
console.log("Sort your array so its stored in alphabetical order");
travelworld.sort();
console.log(travelworld);
console.log("Sort to change your array so its stored in reverse alphabetical order");
travelworld.sort().reverse();
console.log(travelworld);
export {};
