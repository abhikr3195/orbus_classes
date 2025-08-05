function outer(){
    console.log("this is outer function");
    function inner(){
        console.log("this is inner function");
    }
    inner();
}

outer();


// output
// this is outer function
// this is inner function

function counter(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

const plus = counter();
console.log(plus());//1
console.log(plus());//2
console.log(plus());//3

// plus() it is used as a function with paranthesis
// This code uses a closure to create a private counter. The `counter` function defines a local variable `count` and
//  returns an inner function. 
// That inner function has access to `count` even after `counter` finishes executing —
//  this is what a closure does. 
// When we call `counter()`, 
// it returns the inner function and stores it in `plus`, which still remembers and updates the `count` variable.
// Each time we call `plus()`,
//  it increments and returns the updated value of `count`, maintaining its own state between calls.


