//? Generics in Typescript
console.log("generic file");

//general log

const score: Array<number> = [];

const names: Array<string> = [];

function identityOne(num: number | boolean): boolean | number {
  return num;
}

//& in this function we can pass any type and return any type (like passing number and returning string)
function identityTwo(val: any): any {
  return val;
}

//? here in this function, whatever you pass as type , it ensure the same return type
function identityThree<Type>(val: Type): Type {
  if (typeof val === "string") {
    return val;
  } else return val;
}
identityThree(3); //$ it only return the value that you're passing

//* Another way to declare generics
function identityFour<T>(val: T): T {
  return val;
}

interface Cricket {
  format: string;
  overs: number;
  time: number;
}

function identityFive<Cricket>(val: Cricket): Cricket {
  val = {
    ...val,
    time: 200,
  };
  console.log(val);
  return val;
}

identityFive({
  format: "t20i",
  overs: 20,
  time: 180,
});

//* Generic with Array
function getSearchProduct<Type>(products: Type[]): Type[] {
  return products;
}

//* Generic with arrow function
const getMoreSearchProduct = <T>(products: Array<T>): T => {
  return products[3];
};

//* Normal Arrow function with type

const getDetails = (num: number): number => {
  return num;
};

function newFunction<T, U extends string>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

newFunction(2, "3");

interface BlogDatabase {
  _id: string;
  name: string;
  summary: string;
  comments: Array<string>;
}

function fetchOneFromBlogDatabase<BlogDatabase, key extends keyof BlogDatabase>(
  blog: BlogDatabase,
  name: key
) {
  return blog[name];
}

//& Generic class
interface Course {
  name: string;
  department: "IT" | "CSE" | "AIML";
  students: number;
  rank: string;
}

interface Quiz {
  name: string;
  course: Course;
  participants: number;
  mark: number;
}

class Conduct<T> {
  public duration: number = 120;
  public questions: T[] = [];

  start(quiz: T) {
    this.duration = 90;
  }

  end(quiz: T) {
    this.duration = 0;
  }
}
