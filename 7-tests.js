console.log('a');
setTimeout(() => {
    console.log('b');
}, 0);
Promise.resolve(() => console.log('c')).then((res) => res());
console.log('d');

const  add = (a) =>  {
    return (b) => {
        return b ? add(a+b) : a;
    }
}

console.log(add(1)(2)(3)(5)());

let obj1 = { a: 10}
const obj2 = obj1;
obj2.a = 20;
const obj3 = {...obj1};
obj3.a = 50;
console.log(obj1);
console.log(obj2);
console.log(obj3);


const multiply = (a) => {
    return (b) => {
        return (c) => {
            return a * b * c;
        }
    }
}

console.log(multiply(2)(3)(4));
