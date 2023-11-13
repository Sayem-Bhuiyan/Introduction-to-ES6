const numbers = [1, 3, 4, 5, 3, 6];
// for(let i = 0; i < numbers.length; i++){}
for(const number of numbers){
    // console.log(number);
}

const nobab = 'Siraj Ud Doulla';
for(const char of nobab){
    // console.log(char);
}

const glass = {
    name: 'glass',
    color: 'Golden',
    price: 12,
    isCleaned: true
}

for(const key in glass){
    const value = glass[key]
    console.log(key, value);
}