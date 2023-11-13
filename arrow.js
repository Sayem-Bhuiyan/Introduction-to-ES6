// function declaration

// function add(a, b){
//     const result = a + b;

//     return result;
// }
function add(a, b){
    return  a + b;
}

const sum = add(5, 90);
console.log(sum)


// function expression

const add2 = function(a, b){
    return a + b;
}


// arrow function

const add3 = (a , b) =>  a+ b;
const add4 = (a, b, c, d) => a + b + c + d;

const arr = [1, 2, 3, 4, 5]
const double = arr.map(item => item * 2);
console.log(double)