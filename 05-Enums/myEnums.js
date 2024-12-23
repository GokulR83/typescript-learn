var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["aisle"] = 0] = "aisle";
    SeatChoice[SeatChoice["middle"] = 1] = "middle";
    SeatChoice[SeatChoice["window"] = 2] = "window";
})(SeatChoice || (SeatChoice = {}));
var seat = SeatChoice.aisle;
console.log(seat); // output:- 0
var PlayerNumber;
(function (PlayerNumber) {
    PlayerNumber[PlayerNumber["KL_Rahul"] = 1] = "KL_Rahul";
    PlayerNumber[PlayerNumber["Rohit_Sharma"] = 45] = "Rohit_Sharma";
    PlayerNumber[PlayerNumber["Virat_Kolhi"] = 18] = "Virat_Kolhi";
    PlayerNumber[PlayerNumber["Jasbrit_Bumrah"] = 93] = "Jasbrit_Bumrah";
})(PlayerNumber || (PlayerNumber = {}));
var klNumber = PlayerNumber.KL_Rahul;
console.log(klNumber);
