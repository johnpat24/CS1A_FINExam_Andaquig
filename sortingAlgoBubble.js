// an empty array 
let numbers = [];

// it will ask the user to enter a number until they will leave it empty 
while (true) {
    let input = prompt(`Enter a number (leave empty to stop):`);
    if (input === null || input.trim() === "") {
        break;
    }

    let num = Number(input);

    if (!isNaN(num)) {
        numbers.push(num);
    } else {
        console.log("Invalid input. Please enter a number.");
    }
}

console.log("Original Array:", numbers);

// bubble sort function
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    for (let i = 0; i < n - 1; i++) {
        swapped = false;
        for (let j = 0; j < n - 1 - i; j++) {
            console.log(`Compare ${arr[j]} and ${arr[j + 1]}`);
            if (arr[j] > arr[j + 1]) {
                // swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
                console.log("Swapped:", arr[j], "with", arr[j + 1]);
            }
        }
        if (!swapped) break;
    }
    return arr;
}

let sortedArray = bubbleSort(numbers);
console.log("Sorted Array:", sortedArray);
