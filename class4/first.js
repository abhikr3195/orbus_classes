//Named Function
function appendData() {
    // alert("Hello World");
    document.getElementById("first_div").innerHTML = "<strong>Hello World</strong>";

}
// Type : Anonymous Function
let divData = function () {
    document.getElementById("second_div").innerHTML = "<strong>Hello World</strong>";


}

// here divData is called function expression.


let divdata2 = () => document.getElementById("second-div").innerHTML = "<strong>Hello World</strong>";

function frmSubmit(event){
    event.preventDefault();

    alert("form is submitted")
}
 

let bodyLoad=()=>
    alert("HTML Body is loaded")


function someAnimation(flag){
    if (flag) {
    document.getElementById("first_div").innerHTML =
      "Mouse pointer is on top of div1";
  }else{
    document.getElementById("first_div").innerHTML =
      "";
  }
}