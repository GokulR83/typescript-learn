let score: number | string ;

score = 2524;
score = "Not yet Started";

type User ={
    name: string;
    id: number
}
type Admin ={
    name: string;
    id: number
}


let gokul: User | Admin = {
    name:"gokul",
    id:34
}

function concat(val1: number , val2: number): string | number {
    return val1 + val2;
}

//? it only allow either type
const data: number[] | string[] = ["2345","34635","ggdf"];

//? In this case you can have both

const data1 : (number | string )[] = [345,"sf",5654,"svdfg"];

let seatAllotment: "aisle" | "middle" | "window"; //? Other than this value throw the error

seatAllotment = "middle";