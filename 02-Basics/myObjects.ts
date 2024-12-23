const user = {
    name:"gokul",
    email:"rajugokul003@gmail.com",
    isActive:true
}

function createUser({ name:string , isActive: boolean }){

}
createUser({ name:"Gokul", isActive: true });

//? This Function return a Object
function createCourse():{ name:string , isPaid: boolean }{
    return {
        name:"DSA",
        isPaid: true
    };
}