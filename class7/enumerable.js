const myObj = {
    name: "Rohit",
    age: 25,
    qualification: "MCA",
    company: "TCS",
    salary: "8LPA"
}

console.log(Object.keys(myObj));
console.log(Object.keys(myObj).length);

Object.defineProperty(myObj,"name",{
    enumerable: false
})
console.log(Object.keys(myObj));

// The property still exists on the object — it hasn’t been deleted —
// but now it won’t show up when looping or listing keys.



Object.defineProperty(myObj,"qualification",{
    writable: false
})
myObj.qualification = "mbbs";
console.log(myObj);

// this property define that it is not writale
// writable: false makes 'qualification' read-only; assignment fails silently, value stays unchanged.



Object.defineProperty(myObj,"company",{
    configurable: false
})

delete myObj.company;//not working
delete myObj.salary; // deleted

console.log(myObj);

// configurable: false prevents deletion or redefinition; 'company' stays, but 'salary' is deleted.
