const promise =
    new Promise( (resolve, reject) => {
        resolve('good!');
        //reject('bad');
    })
    .then( value => {
        console.log(`value is: ${value}`);
    })
    .catch( err => {
        console.log(err);
    });