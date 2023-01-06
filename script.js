const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

let result = '';

const key = function generateKey(number) {
    for (let i = 0; i < number; i++ ) {
        result += characters.charAt(Math.random() * characters.length);
    }
    return result;
}

console.log(key(10));
