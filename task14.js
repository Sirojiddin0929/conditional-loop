function mostCommonWord(paragraph, banned) {
    paragraph = paragraph.toLowerCase()
    let words = []
    let current = ""
    for (let i = 0; i < paragraph.length; i++) {
        let ch = paragraph[i]
        if (ch >= 'a' && ch <= 'z') {
            current += ch
        } else {
            if (current.length > 0) {
                words.push(current)
                current = ""
            }
        }
    }
    if (current.length > 0) {
        words.push(current)
    }
    let freq = {}
    for (let i = 0; i < words.length; i++) {
        let word = words[i]
        let isBanned = false

        
        for (let j = 0; j < banned.length; j++) {
            if (word === banned[j]) {
                isBanned = true
                break
            }
        }

        if (!isBanned) {
            if (freq[word] === undefined) {
                freq[word] = 1
            } else {
                freq[word]++
            }
        }
    }

  
    let maxWord = ""
    let maxCount = 0

    for (let word in freq) {
        if (freq[word] > maxCount) {
            maxCount = freq[word]
            maxWord = word
        }
    }

    return maxWord
}

let paragraph = prompt("Matn kiriting:")
let bannedInput = prompt("Banned so'zlarni vergul bilan kiriting (bo'sh qoldirsangiz yo'q bo'ladi): ")
let banned = []
let temp = ""
for (let i = 0; i < bannedInput.length; i++) {
    if (bannedInput[i] !== ",") {
        temp += bannedInput[i]
    } else {
        if (temp.length > 0) {
            banned.push(temp.trim())
            temp = ""
        }
    }
}
if (temp.length > 0) {
    banned.push(temp.trim())
}
alert(mostCommonWord(paragraph,banned))
