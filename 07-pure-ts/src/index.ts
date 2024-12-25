console.log("Hello World!!");

const all = new Object();

class User{

    email: string;
    public name: string; //? it can be access anywhere
    city: string = "";
    private readonly userType: string = "user"; //? if you're setting as private , you can't access it
    pincode: number;
    private courseCount = 1;


    constructor(email: string, name:string, city: string, pincode: number ){
        this.email = email;
        this.name = name;
        this.city = city;
        this.pincode = pincode;
    }

    //& Private Method
    private deleteToken():void{
        console.log("Token deleted");
    }

    //& Getter
    get getGooglemail(): string {
        return `google ${this.email}`;
    }

    get getCourseCount():number{
        return this.courseCount;
    }
    //& setter
    set setCourseCount(courseNumber: number){
        if(courseNumber <= 1){
            throw new Error("Course count should me, more than 1");
        }
        else
        this.courseCount = courseNumber;
    }
}

//? Like Industry standard code
class NewUser{
    constructor(public name:string, private email:string, zipocode: number){
    }
}

class SubUser extends User {
    isFamily: boolean = true;

    set setIsfamily( isFam:boolean ){
        this.isFamily = false;
    }
}

const gokul = new User("withgokulr@gmail.com","Gokul R","Kallakurichi",606401);
const nithya = new SubUser("nithya@gmail.com","Nithya R","Kallakurichi",606401);
console.log(gokul);
console.log(nithya);


interface Cricket{
    format: string,
    overs: number,
    time: number
}
