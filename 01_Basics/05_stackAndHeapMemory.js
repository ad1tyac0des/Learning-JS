/*
Stack and Heap Memory
 
Stack --> Primitive 
Heap --> Non-Primitive

*/

// STACK
let x = 1;
let y = x;
y = 2;
console.log(x) 
console.log(y)  


// HEAP
let userOne = {
    email: 'xyz@gmail.com',
    upi: 'user@sbi'
}

let userTwo = userOne
userTwo.email = "abc@google.com"

console.log(userOne)
console.log(userTwo)