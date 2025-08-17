function task(arr){
     let lst=[]
    for (let i of arr){
        lst.push(i+1)
    }
    return lst

}
let arr=[]
let n=+prompt("array nechta elementdan iborat: ")
for(let i=0; i<n; i++){
     let a=+prompt(`${i+1}-elementni kiriting: `)
    arr.push(a)
}
alert(task(arr))