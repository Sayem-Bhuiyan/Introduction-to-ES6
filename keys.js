const glass = {
    name: 'glass',
    color: 'Golden',
    price: 12,
    isCleaned: true
}

console.log(glass);
const keys = Object.keys(glass);
console.log(keys);

const values = Object.values(glass);
console.log(values);

const pair = Object.entries(glass);
console.log(pair);