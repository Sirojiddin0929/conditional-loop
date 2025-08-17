function mixed(arr,num1){
    for (let i of arr ){
        if(i==num1){
            return true
        }
        

    }
    return false

}
let arr=[]
let n=+prompt("array nechta elementdan iborat: ")
for(let i=0; i<n; i++){
    let a=+prompt(`${i+1}-elementni kiriting: `)
    arr.push(a)
}
let num1=+prompt("1-sonni kiriting: ")
alert(mixed(arr,num1))