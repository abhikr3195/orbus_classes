let arr1 = [10,5,20,50,'100'];
console.log("Default ar1 is",arr1);

let arr2 = arr1;
console.log("Default ar2 is",arr2);

arr2[1] = 500;

console.log("Default ar1 is",arr1[1]);//5
console.log("Default ar2 is",arr2[1]);//500

let newarr1 = [];
for(let ar of arr1){
    newarr1.push(arr1);
}
console.log(newarr1);
arr1[0] = 100;
console.log(newarr1);

// ---------------------------------
// rest and spread are same , but when we use ... inside a function as its parameter it is called rest 
// if not in func outside function then it is called spread operator
//--------------------------------
//Rest operator : ...