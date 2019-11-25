// const Greeting = (function(name) {
//     return 'Salut + name;'
// })(Emilie);

// console.log(Greeting);

// function add(a, b) {
//     return a + b;
// }

// const result = add(12, 6);

// console.log(result);

// const result = (function add(a, b) {
//     return a + b;
// })(12, 6);

// console.log(result);

// const obj = {
//     key1: 'value1',
//     key2: 'value2',
// };

// console.log(obj['key1']);
// console.log(obj.key1);

// function discoverObject(key,obj) {
//     console.log(onj[key]);
// }

// discoverObject('key1', obj);

const data = require('./data.json');

const books = data.books;

let str = '';

for (let b of books) {
    str += `
<h1>
Le livre ${b.title} coûte ${b.price} euros
<h1>
`;
}

console.log(str);
