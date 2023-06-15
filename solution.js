const solution = string => {
    let upper = ['A','B','C','D','E','F','G','H','I','J','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    let stringArr = string.split('')
    for (let i = 0; i < stringArr.length; i++) {
        if (upper.includes(stringArr[i])) {
            stringArr.splice(i, 0, ' ')
            i++
        }
    }
    return stringArr.join('')
}

console.log(solution('')) // ''
console.log(solution('identifier')) // identifier
console.log(solution('camelCasing')) // camel Casing
console.log(solution('camelCasingTest')) // camel Casing Test
