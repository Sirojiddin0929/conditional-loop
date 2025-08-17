function task(arr){
    return arr[n-1]
}
let arr=[]
let n=+prompt("array nechta elementdan iborat: ")
for(let i=0; i<n; i++){
     let a=+prompt(`${i+1}-elementni kiriting: `)
    arr.push(a)
}
alert(task(arr))