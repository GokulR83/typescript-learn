"use strict";
//? Generics in Typescript
console.log("generic file");
const score = [];
const names = [];
function identityOne(num) {
    return num;
}
//& in this function we can pass any type and return any type (like passing number and returning string)
function identityTwo(val) {
    return val;
}
//? here in this function, whatever you pass as type , it ensure the same return type
function identityThree(val) {
    if (typeof val === 'string') {
        return val;
    }
    else
        return val;
}
identityThree(3); //$ it only return the value that you're passing
//* Another way to declare generics
function identityFour(val) {
    return val;
}
function identityFive(val) {
    val = Object.assign(Object.assign({}, val), { time: 200 });
    console.log(val);
    return val;
}
identityFive({
    format: "t20i",
    overs: 20,
    time: 180
});
