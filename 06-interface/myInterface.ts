interface NewUser {
    name: string,
    readonly id: number,
    wickets ?: number,
    startPlay: () => string
}

interface NewAdmin extends NewUser{

}



const umesh : NewUser = {
    name: "Umesh Yadav",
    id:19,
    wickets: 154,
    startPlay() {
        return "Test Match"
    },
}

//? Difference Between Types and Interface