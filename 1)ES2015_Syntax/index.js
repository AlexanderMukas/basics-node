//ES6

// arrow functions - new syntax
var nums = [1,2,3,4];
nums.forEach( (num, index) => {
    console.log(num*2);
    console.log("index: ", index);
})

// old syntax
// nums.forEach( function(num) {
//     console.log(num*2)
// })

// ===


//block scoping with let
for(let i = 0; i <= 4; ++i){
    setTimeout( () => {
        // console.log(i);
    }, 1000);
}

// default params
function test1(a, b, c = 3) {
    // console.log('default params:', a + b + c);
};

test1(1,2);

// function variadics
function sum(...nums) {
    console.log(nums.reduce( (acc, a) => a + acc, 0));
};

sum(1, 5, 6);

// spread operator
console.log("// spread operator");
let a = [1,2,3];
let b = [...a, 4,5];
console.log("let a = [1,2,3]; \n let b = [...a, 4,5]; \n" , b);


// property shorthand
var c = 'c';
var d = 'd';

// var e = {c: c, d: d};
var e = { c, d };
console.log(e);