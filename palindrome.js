// it will check if the word is same backwards 

let first_word = prompt("enter the 1st word");  // ex. RACECAR
let second_word = prompt("enter the 2nd word");  // ex. RECORDER

// this part will reverse the word
let rev1 = first_word.split("").reverse().join("");  // reverse word1
let rev2 = second_word.split("").reverse().join("");  // reverse word2

// it will show the original string and the reverse string
console.log("Word 1:", first_word);
console.log("Reversed 1:", rev1);
console.log("Is Palindrome?", first_word === rev1);  

console.log("Word 2:", second_word);
console.log("Reversed 2:", rev2);
console.log("Is Palindrome?", second_word === rev2); 


