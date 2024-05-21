"use strict"; //treats all JS code as newer version

// alert("Hey") //we are using node.js, not browser. So try this in Browser!


let userName = "Aditya" // string Datatype
let age = 20 // number Datatype
let isLoggedIn = false // boolean Datatype
let state; // undefined datatype


/*
Basically there are 2 types of Datatypes in JS: 
  Primitive & Reference

  Primitive Datatypes:
     1. number --> its range is 2^53
     2. BigInt
     3. string --> ""
     4. boolean --> true/false
     5. null --> standalone value
     6. undefined --> value not assigned yet
     7. symbol --> unique (used mostly in React to identify different components)

  Reference Datatypes: 
    1. Object
    2. Array
    3. Function
    4. Date
    5. RegExp
    6. Error
*/


//typeof --> It's an operator returns a string indicating the type of operand's value.

console.log(typeof "h") // string
console.log(typeof userName) // string
console.log(typeof age) // number
console.log(typeof isLoggedIn) //boolean


console.log(typeof null) // object
console.log(typeof undefined) // undefined