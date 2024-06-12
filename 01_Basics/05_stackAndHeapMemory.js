/*
Stack and Heap Memory
 
Stack --> Primitive 
Heap --> Non-Primitive

*/

// STACK
let x = 1;
let y = x;
y = 2; // when we changed value of y, the value of x doesn't changes. This is Primitive.
console.log(x) 
console.log(y)  


// HEAP
let userOne = {
    email: 'xyz@gmail.com',
    upi: 'user@sbi'
}

let userTwo = userOne
userTwo.email = "abc@google.com" //When val of userTwo is changed, automatically val of userOne changes. This is Non-Primitive.

console.log(userOne)
console.log(userTwo)