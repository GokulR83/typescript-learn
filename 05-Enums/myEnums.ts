enum SeatChoice {
    aisle,
    middle,
    window
}

const seat = SeatChoice.aisle;
console.log(seat); // output:- 0


enum PlayerNumber {
    KL_Rahul = 1,
    Rohit_Sharma = 45,
    Virat_Kolhi = 18,
    Jasbrit_Bumrah = 93
} //? it generate a IIFE Function in Javascript

const klNumber = PlayerNumber.KL_Rahul;
console.log(klNumber);


//? When you declare enum using const , it only generate the needed value
const enum Salary {
    KL_Rahul = "14cr",
    Virat_Kolhi = "21cr",
}

const VKSalary = Salary.Virat_Kolhi; //? const VKSalary = "21cr";

export{}
