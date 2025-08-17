function mixed(arr){
     let juft=0
     let  toq=0
    for (let i=0; i<arr.length; i++ ){
        if(i%2==0){
            juft+=arr[i]
        }
        else{
            toq+=arr[i]
        }
    }
    return {
        "Juftlar summasi":juft,
        "Toqlar summasi": toq
    }

}
let arr=[]
let n=+prompt("array nechta elementdan iborat: ")
for(let i=0; i<n; i++){
    let a=+prompt(`${i+1}-elementni kiriting: `)
    arr.push(a)
}
console.log(mixed(arr))