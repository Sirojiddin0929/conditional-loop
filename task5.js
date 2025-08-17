function task(arr,x){
    for(i=0; i<arr.length;i++){
        if(arr[i]==x){
            return i
        }
        
    }
    return -1
}
let arr=[]
let n=+prompt("array nechta elementdan iborat: ")
for(let i=0; i<n; i++){
     let a=+prompt(`${i+1}-elementni kiriting: `)
    arr.push(a)
}
let x=+prompt("Sonni kiriting: ")
alert(task(arr,x))