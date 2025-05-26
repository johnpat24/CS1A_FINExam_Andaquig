// it will ask the user to a numbers in seperated coma
let numbers = prompt("Enter a number separated by comma (Ex: 24, 65, 21, 9):");

// split the input by comma
let numbers = numbersInput.split(",").map(num => Number(num.trim()));

// it will also as the suer and separate the names by coma
let names = prompt("Enter a name separated by comma (Ex: zenvo, erica, jordie, alicia):");

// the names will stay as text
let names = namesInput.split(",").map(name => name.trim());

// name and numbers will combine as array
let merged = numbers.concat(names);
console.log("Merged Array:", merged);

// it will reverse from largest to smallest number
let numbersSortedRev = numbers.sort((a, b) => b - a);
console.log("Numbers Sorted Reverse:", numbersSortedRev);

// while this will be arranged in alphabetically 
let namesSorted = names.sort();
console.log("Names Sorted Alphabetically:", namesSorted);

