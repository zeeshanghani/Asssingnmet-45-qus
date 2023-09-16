// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function tShirt(size = "large", message = "I love TypeScript") {
    console.log("size", size, "message", message);
}
tShirt();
tShirt("medium");
tShirt("small", "typescript is ....the future");
export {};
