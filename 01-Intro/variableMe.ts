//& Type Inference -> Typescript automatically detect the type of the variable when we assign a value explicitly we call it as type inference

//? String Type
const greetings: string = "Hello!!, Welcome ";
// Type Inference
const welcome = "hello Gokul";

//? Number Type
let num: number = 21;
//Type Inference
let  num1 = 22; 

//? Boolean Type
let isLoggedIn: boolean = true;
// Type Inference
let isLoggedOut = false;

console.log(greetings + num);

//? Any type
//! Where to use and where not to use
//$ type "any" -> I don't wanna do any type checking on the particular variable

let hero; //& This variable Infered as type "any"
function getHero(){
    return "Thor";
}
hero = getHero();
hero = 234;
