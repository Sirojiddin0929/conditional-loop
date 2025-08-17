function removespaces(str) {
    let natija = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            natija += str[i];
        }
    }
    return natija
}

let a = prompt("Stringni kiriting: ")
alert(removespaces(a))
