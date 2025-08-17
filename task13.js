function table(list1, list2) {
    let result = []
    let minSum = Infinity
    for (let i = 0; i < list1.length; i++) {
        for (let j = 0; j < list2.length; j++) {
            if (list1[i] === list2[j]) {
                let sum = i + j

                if (sum < minSum) {
                    minSum = sum
                    result = [list1[i]]
                } else if (sum === minSum) {
                    result.push(list1[i])
                }
            }
        }
    }

    return result
}
let list1=[]
let n=+prompt("array nechta elementdan iborat: ")
for(let i=0; i<n; i++){
    let a=prompt(`${i+1}-elementni kiriting: `)
    list1.push(a)
}
let list2=[]
let m=+prompt("array nechta elementdan iborat: ")
for(let i=0; i<n; i++){
    let a=prompt(`${i+1}-elementni kiriting: `)
    list2.push(a)
}


alert(table(list1,list2))


