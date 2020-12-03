//ES6

// arrow functions
var nums = [1,2,3,4];
nums.forEach( num => {
    console.log(num*2);
})

nums.forEach( function(num) {
    console.log(num*2)
})

// ===


//block scoping with let
for(let i = 0; i <= 4; ++i){
    setTimeout( () => {
        console.log(i);
    }, 1000);
}