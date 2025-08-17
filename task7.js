function split(son){
    return {
        "ilm": son*0.5,
        "xarajat": son*0.3,
        "kelajak": son*0.2
    }
}
let son=+prompt("Sonni kiriting: ")
console.log(split(son))