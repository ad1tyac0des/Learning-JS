// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1)
// console.log("02" > 1)  // In both examples, JS automatically converts 2 in number


// console.log(null > 0)
// console.log(null == 0)
// console.log(null >= 0)
/* The reason is that an equality check == and comparisons > < >= <= works differntly. Comparisons convert null to a number, treating it as 0. That's why (3) null >= 0 is true and (2) null == 0 is false. */

// console.log(undefined > 0)
// console.log(undefined == 0)
// console.log(undefined >= 0)
// console.log(undefined < 0)



// Strict Equality 

console.log("2" === 2) // false // it also checks for data type
console.log(2 === 2) // true
