const arr = [1, 2, 3, 4, 5]
let a = arr.reduce((a, b) => [b].concat(a), [])
console.log(a)