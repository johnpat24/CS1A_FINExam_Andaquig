// an empty array to store a grocery items
let groceryStack = [];

// it will check if the stock is empty or not and return the last item
function peek() {
    if (groceryStack.length === 0) {
        console.log("Stack is empty");
        return null;
    } else {
        console.log("Top item:", groceryStack[groceryStack.length - 1]);
        return groceryStack[groceryStack.length - 1];
    }
}

// check if input is valid (letters and spaces only)
function isWord(str) {
    return /^[A-Za-z ]+$/.test(str.trim());
}

// add an item to the stack
function push(item) {
    if (!isWord(item)) { 
        console.log("Invalid item. Please enter words only."); 
        return;
    }
    groceryStack.push(item);
    peek();
    console.log("Stack:", groceryStack);
}

// this will remove the last item from the stock
function pop() {
    if (groceryStack.length === 0) {
        console.log("there's Nothing to remove. Stack is empty.");
    } else {
        let remove = groceryStack.pop();
        console.log("Removed:", remove);
        peek();
        console.log("Stack:", groceryStack);
    }
}

// it will ask the user for the grocery 5 times
for (let i = 0; i < 5; i++) {
    let item = prompt(`Enter grocery item ${i + 1} (items only):`);
    push(item);
}

