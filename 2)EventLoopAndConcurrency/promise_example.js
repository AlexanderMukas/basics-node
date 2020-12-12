Promise.resolve(null)
    .then( value => {
        console.log(value);
        return 1;
    })
    .then( value => {
        console.log(value);
        return 2;
    })
    .then( value => {
        console.log(value);
        return 3;
    })
    .then( value => {
        console.log(value);
        return 4;
    })
    .then( value => {
        console.log(value);
        return 5;
    })
    .then( value => {
        console.log(value);
        return 6;
    });
    
    // output: 
    // null
    // 1
    // 2
    // 3
    // 4
    // 5