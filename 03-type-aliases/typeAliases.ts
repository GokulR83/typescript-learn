
//? It help us to define type for anything like custom type
type User = {
    name: string;
    email: string;
    number: number;
    isPaid: boolean;
}

const user = {
    name:"Gokul",
    email: "rajugokul003@gmail.com",
    number: 234536535,
    isPaid: true
}
function createUser( user: User ): User{
    return user;
}
createUser(user);


//& Readonly & optional type
type Blog = {
    readonly _id: string; //! this make as immutable
    title: string,
    summary: string,
    subTitles: string[];
    explaination ?: string; // which is optional, we can mention and may not
}

const newBlog: Blog = {
    _id:"124234", //? we cant modify this here after
    title:"KL Rahul Comeback",
    summary:"lorem new summary welcome to new blog Post and etc",
    subTitles: ["Boxing Day Test Match", "fastest t20i fifty","fastest ipl 50"]
}


const createBlog = (blog: Blog) : Blog =>{
    return blog;
}


type cardNumber = {
    cardNumber: string;
}

type cardDate = {
    cardDate: string;
}

//? Combine two types
type cardDetails = cardNumber & cardDate;

export{}