
function checkType(val: number | string ) {
    if(typeof val === "string")
        return val.toUpperCase();

    return val + 23;
}

//* another example

function provideId(id: string | null){
    if(!id){
        console.log("Provide the Id");
    }
    return id?.toLowerCase();
}

//* Type of any array is object
function checkArrayType(val: number[] | string): number[] | string {
    if(typeof val === "object"){
        return val.map(c => c*c);
    }
    return "no need to any operation";
}


function printString(strs: string | string[] | null){
    if(!strs){
        return "No String is there";
    }
    else if(typeof strs === "string"){
        console.log(strs);
    }
    for (const str of strs) {
        console.log(str);
    }
}