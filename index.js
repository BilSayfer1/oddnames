let arr = [2,1,1,9,22,7,1,38,14,4,3,1]

let total = arr.reduce((a,b) =>  a + b,  0)

console.log(total);

arr.sort((a,b) => a - b)

console.log(arr);


let students = [`radmir`, `xasan baran`, `alibek`, `shaxboz`]

let even_names = []
let odd_names = []

students.map((std,ind) => {
    if(ind % 2 === 0) {
    even_names.push(std)
    } else {
       odd_names.push(std)
    }
})



console.log(even_names + ` ` + `Четные имена`);
console.log(odd_names + ` ` + `Нечетные имена`);