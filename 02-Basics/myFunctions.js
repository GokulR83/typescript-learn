//? We need to mention the type of the parameter
function add(a, b) {
    return a + b;
}
var res = add(213, 43);
//? You need to mention the return type as well
function getUpper(str) {
    return str.toUpperCase();
}
var up = getUpper("Gokul");
console.log(up);
//? Providing Default value as well
function logIn(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
    return "you're logged in as " + name + " and your email is " + email;
}
logIn("gokul", "withgokulr@gmail.com");
// this function return more than one type
function getValue(myValue) {
    if (myValue > 5) {
        return true;
    }
    return "200 OK";
}
//? Arrow function with return type
var getHello = function (s) {
    return "";
};
