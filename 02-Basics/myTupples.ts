//& Tupples is there to maintain the order and type of the element

const user: (string | number)[] = [1,"KL Rahul"];

const user1:[number, string, boolean] = [1,"Kl Rahul", true];

let rgb:[number, number, number ] = [255,122,89];


type User1 = [number, string, boolean]; //? tuple custom 
// type

const newUser: User1 = [45,"Rohit Sharma",true];
newUser[1] = "RG"; // we can modify as well

newUser.push(true);