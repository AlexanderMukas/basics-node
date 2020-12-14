function a() {
    return Promise.resolve('a');
};

const result = async () => {
    return await Promise.resolve('b');
};

async function c() {
    return 'c';
};

console.log(a());
console.log(result());
console.log(c());
