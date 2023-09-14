function makeShirt(size = "Large", message = "I love TypeScript") {
    return console.log(`Size: ${size}, Message: '${message}'`);
}
// Large shirt with default message
makeShirt(); // Output: Size: Large, Message: 'I love TypeScript'
// Medium shirt with default message
makeShirt("Medium"); // Output: Size: Medium, Message: 'I love TypeScript'
// Custom shirt with a different message and size
makeShirt("Small", "Please Subscribe TypeScript insigts!"); // Output: Size: Small, Message: 'Please Subscribe TypeScript insigts'
export {};
