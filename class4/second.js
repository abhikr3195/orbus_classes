
// No Error because it is named funciton and it is called Hoisting
function helloJs(){
    console.log("I am in hello js");
}
helloJs()

// Error because it a anonymous function
// hiJS()
// let hiJS=()=> console.log("this is hiJS");


let hiJS=()=> console.log("this is hiJS");
hiJS()