function messi(array) {
    let types = []
    for (let i = 0; i < array.length; i++) {
        types.push(typeof array[i])
    }
    return types
}
let arr = []
let n = +prompt("Massiv nechta elementdan iborat: ")
for (let i = 0; i < n; i++){
    let a = prompt(`${i+1}-elementni kiriting: `)
    if (!isNaN(a) && a.trim() !== "") {
        arr.push(Number(a));
    } 
    else if (a.toLowerCase() === "true" || a.toLowerCase() === "false") {
        arr.push(a.toLowerCase() === "true")
    } 
    else {
        arr.push(a)
    }
}
alert(messi(arr))
