
interface takePhotos {
    cameraMode: string
    filter: string
    burst: number
}

interface Story{
    createStory(): void
    author: string
}

class Instagram implements takePhotos{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}
}

class YouTube implements takePhotos{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string
    ){}
}

class NewSocialMediaApp implements takePhotos , Story{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string,
        public author: string
    ){}

    createStory(): void {
        
    }
}

interface Plane{
    name: string
    year: number
}

abstract class CargoPlane implements Plane{
    constructor(
        public name:string,
        public year: number
    ){}

    abstract flyPlane(): void;

    landPlane(): string{
        return "Plane Landed";
    }
}
//? In abstract class, we can't create object out of it
class NewPlane extends CargoPlane{
    constructor(
        public name:string,
        public year: number
    ){
        super(name,year);
    }

     flyPlane(): void{
        console.log("Plane Flying!!!")
     }
}

const CSKEmirats = new NewPlane("Emirats",2024);
CSKEmirats.landPlane();