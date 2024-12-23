//? We need to mention the type of the parameter
function add(a: number,b: number) : number{
    return a+b;
}
let res = add(213,43);

//? You need to mention the return type as well
function getUpper(str: string): string{
    return str.toUpperCase();
}
let up = getUpper("Gokul");
console.log(up);

//? Providing Default value as well
function logIn(name: string, email: string, isPaid: boolean = true){
    return "you're logged in as "+ name + " and your email is "+ email;
}  

logIn("gokul","withgokulr@gmail.com");

// this function return more than one type
function getValue(myValue: number){
    if(myValue > 5){
        return true;
    }
    return "200 OK";
}

//? Arrow function with return type
const getHello = (s: string) : string =>{
    return "";
}


const heros: string[] = ["spiderman","thor","ironman"];

//? Map function with return type
heros.map((hero): string =>{
    return hero;
})

//? function without return type
function consoleErr(errmsg: string) : void {
    console.log(errmsg);
}

//? If you want to handle the error message use "never" type
//& this method never return anything , its a good practice to use "never" instead of "void"
function fail(msg): never {
    throw new Error(msg);
}
