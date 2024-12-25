"use strict";
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class YouTube {
    constructor(cameraMode, filter, burst, short) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
}
class NewSocialMediaApp {
    constructor(cameraMode, filter, burst, short, author) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
        this.author = author;
    }
    createStory() {
    }
}
class CargoPlane {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    landPlane() {
        return "Plane Landed";
    }
}
//? In abstract class, we can't create object out of it
class NewPlane extends CargoPlane {
    constructor(name, year) {
        super(name, year);
        this.name = name;
        this.year = year;
    }
    flyPlane() {
        console.log("Plane Flying!!!");
    }
}
const CSKEmirats = new NewPlane("Emirats", 2024);
CSKEmirats.landPlane();
