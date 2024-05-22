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
console.log(booleanStringVal)


