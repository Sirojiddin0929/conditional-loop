function human(names, heights) {
    let a = []
    for (let i = 0; i < names.length; i++) {
        a[i] = [names[i], heights[i]]
    }

    
    for (let i = 0; i < a.length - 1; i++) {
        let maxIndex = i;
        for (let j = i + 1; j < a.length; j++) {
            if (a[j][1] > a[maxIndex][1]) {
                maxIndex = j;
            }
        }
        
        if (maxIndex !== i) {
            let b = a[i]
            a[i] = a[maxIndex]
            a[maxIndex] = b
        }
    }

    
    let result = []
    for (let i = 0; i < a.length; i++) {
        result[i] = a[i][0]
    }

    return result
}
let n = +prompt("Nechta odamni kiritmoqchisiz: ");
let names = []
let heights = []
for (let i = 0; i < n; i++) {
    let name = prompt((i+1) + "-odamning ismini kiriting:");
    let height = +prompt((i+1) + "-odamning bo'yini kiriting:");
    names.push(name)
    heights.push(height)
}
alert(human(names,heights))

