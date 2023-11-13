const actor = {
    name: 'Ananta',
    age: 30, 
    // phone: '01745854655',
    money: 25786467
}

// if right side is an object left side of destructiong will be object as well
// const {phone} =actor

// const phone = actor.phone;
// const name = actor.name;
// const age = actor.age;
// console.log(name);
// console.log(age)


const obj = {
    name: 'Sayem',
    age: 21,
    phone: '01786249860'
}

const {name, age, phone} = obj;
console.log(name, age, phone)


const numbers = [4, 5, 3, 8];
const [first , second, third, fourth] = numbers;
console.log(third);