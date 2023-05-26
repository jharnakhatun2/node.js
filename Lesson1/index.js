//import function and constant
const s1 = require('./student');
console.log(s1.name());
console.log(s1.getAge());
console.log(s1.result);

//shob gulo imported function or variable use korte na chaile another way
const {getName} = require('./student');
console.log(getName());