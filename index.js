//hoisting is the process in which the interpreter reads the declaration (variable, function)
// var shows hoisting... So, BAD!!
//JS is dynamically typed, no need to declare the type of variable

const pi = 3.1415
let a = 1
let b = 3

console.log(a)

function addNum (a,b){
    return a+b
}
console.log(addNum(2,3))

const subNum = (a,b) => a-b 
console.log(subNum(5,4))