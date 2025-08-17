function mixed(num1,num2,arr){
     let lst=[]
     for (let i of arr){
        if(num1<num2){
            if(i>num1 && i<num2){
                lst.push(i)

            }
        }
        else if(num2<num1){
            if(i>num2 && i<num1){
                lst.push(i)

            }
        }
        

     }
     return lst
    


}
let num1=+prompt("1-sonni kiriting: ")
let num2=+prompt("2-sonni kiriting: ")
let arr=[]
let n=+prompt("array nechta elementdan iborat: ")
for(let i=0; i<n; i++){
    let a=+prompt(`${i+1}-elementni kiriting: `)
    arr.push(a)
}
alert(mixed(num1,num2,arr))