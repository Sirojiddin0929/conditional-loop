function sum(arr){
    let b=0
    for (let i of arr){
        b+=i
    }
    return b

}
let arr=[]
let n=+prompt("array nechta elementdan iborat: ")
for(let i=0; i<n; i++){
    let a=+prompt(`${i+1}-elementni kiriting: `)
    arr.push(a)
}
alert(sum(arr))