const difference = (x , y) => x - y;
const multiply = (first, second, third) => first * second * third;
const getAge = (person) => person.age;

const student = {
    name: 'sayem', 
    age: 24
}

const age = getAge(student);
console.log(age)

const getThird = numbers => numbers[2]
const third = getThird([4, 3, 5, 6]);
console.log(third)


