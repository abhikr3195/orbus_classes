const myObj={
    name:"abhi",
    age:24,
    qualification:"b.tech",
    company:"ecom express",
    salary:"8LPA"
}

console.log(Object.keys(myObj));

for (let key in myObj){
    console.log("key: " + key + " and value: " + myObj[key]);
}
    

