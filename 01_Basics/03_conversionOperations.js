/* 
-----------> SUMMARY <-----------

30 --> "30" (number to string)
"30" --> 30 (string to number)
"33abc" --> NaN (string to number)
true --> 1; false --> 0  (boolean to number)
null --> 0  (null to number)

1 --> true (number to boolean)
0 --> false (number to boolean)
"" --> false (empty string to boolean)
"filledString" --> true (filled string to boolean)

*/


/* ___________________________________________________________________________ */


// --> Conversion from number to string

let score = 30

// console.log(typeof score) //number
// console.log(typeof(score)) //number

let stringScore = String(score)
// console.log(typeof stringScore) //string


// ___________________________________________________________________________

// --> Conversion from string to number

let employeeId = "30abc" 

// console.log(typeof employeeId) // string

let numberEmployeeId = Number(employeeId)

// console.log(typeof numberEmployeeId) // number
// console.log(numberEmployeeId) // NaN


// ___________________________________________________________________________


// --> Conversion from null to number

let nilVal = null

// console.log(typeof null) // object

let numberNilVal = Number(nilVal) 
// console.log(typeof numberNilVal) // number
// console.log(numberNilVal) // 0


// ___________________________________________________________________________


// --> Conversion from undefined to number

let unassigned = undefined;
// console.log(typeof unassigned) //undefined

let numberUnassigned = Number(unassigned)
// console.log(typeof numberUnassigned) // number
// console.log(numberUnassigned) // NaN


// ___________________________________________________________________________


// --> Conversion from boolean to number

let isLoggedIn = true
let numberIsLoggedIn = Number(isLoggedIn)

// console.log(typeof numberIsLoggedIn) //number
// console.log(numberIsLoggedIn) // 1


// ___________________________________________________________________________


// --> Conversion to boolean

let numberVal = 1
let booleanVal = Boolean(numberVal)
// console.log(booleanVal) //true


let emptyStringVal =  ""
let booleanEmptyStringVal = Boolean(emptyStringVal)
// console.log(booleanEmptyStringVal) //false


let stringVal = "Aditya"
let booleanStringVal = Boolean(stringVal)
// console.log(booleanStringVal) //true



// *********************************** OPERATIONS  ***********************************

let value = 3
let negValue = -value
// console.log(negValue) // negative of value

// ___________________________________________________________________________

// Arithmetic Operations
// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(2/2)
// console.log(2%2)

// ___________________________________________________________________________

// String Concatenation
str1 = "hello"
str2  = " ady"
str3 = str1 + str2
// console.log(str3)

// ___________________________________________________________________________

// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + "2")
// console.log("1" + 2 + 2)
// console.log(1 + 2 + "2")

// ___________________________________________________________________________

// console.log(+true) // 1
// console.log(+"") // 0

// ___________________________________________________________________________

let num1, num2, num3
num1 = num2 = num3 = 2+2
// console.log(num2)

// ___________________________________________________________________________

// Increment Operator
let gameCounter1 = 100;
++gameCounter1; // Prefix Increment
// console.log(gameCounter1)


let gameCounter2 = 100;
gameCounter2++; // Postfix Increment
// console.log(gameCounter2)



// Understanding how they work
 
let x = 0;
const y = x++;
console.log(x, y)

// In Prefix Increment, value of x increment first and then stored in y. So value of x = 1 and y =  1.
// In Postfix Increment, value of x returns to y first and then value of x increments, which results in y = 0 and x = 1.