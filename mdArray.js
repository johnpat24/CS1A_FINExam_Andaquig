// it will get a names using a prompt and separate it by coma
let names = prompt("Enter a 5 names (ex: carlo, juan)s:");

// it will get a age using a prompt and separate it by coma
let ages = prompt("Enter a 5 age (ex: 20, 27, 27):");

// this will split names into array
let subArray1 = names.split(",").map(x => x.trim());

// it will also split age
let subArray2 = ages.split(",").map(x => Number(x.trim()));

// create a new array name and age 
let md_array = [];

for (let i = 0; i < sub_array1.length; i++) {
    md_array.push([sub_array1[i], sub_array2[i]]);
}

// this will console each name and age per line
console.log("Restructured Multi-Dimensional Array:");
for (let pair of mdArray) {
    console.log(pair);
}

