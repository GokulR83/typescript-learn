"use strict";
console.log("Hello World!!");
const all = new Object();
class User {
    constructor(email, name, city, pincode) {
        this.city = "";
        this.userType = "user"; //? if you're setting as private , you can't access it
        this.courseCount = 1;
        this.email = email;
        this.name = name;
        this.city = city;
        this.pincode = pincode;
    }
    //& Private Method
    deleteToken() {
        console.log("Token deleted");
    }
    //& Getter
    get getGooglemail() {
        return `google ${this.email}`;
    }
    get getCourseCount() {
        return this.courseCount;
    }
    //& setter
    set setCourseCount(courseNumber) {
        if (courseNumber <= 1) {
            throw new Error("Course count should me, more than 1");
        }
        else
            this.courseCount = courseNumber;
    }
}
//? Like Industry standard code
class NewUser {
    constructor(name, email, zipocode) {
        this.name = name;
        this.email = email;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    set setIsfamily(isFam) {
        this.isFamily = false;
    }
}
const gokul = new User("withgokulr@gmail.com", "Gokul R", "Kallakurichi", 606401);
const nithya = new SubUser("nithya@gmail.com", "Nithya R", "Kallakurichi", 606401);
console.log(gokul);
console.log(nithya);
