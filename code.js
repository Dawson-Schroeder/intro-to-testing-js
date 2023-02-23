// helloWorld function

const helloWorld = function() {
    return "Hello, World!";
}

function sayHello(name){
    if(name === true || name === false){
        return `Hello, World!`;
    }else
    return `Hello, ${name}!`;
}

function isFive(input){
    return input === 5;
}

function isEven(input){
    if(input === false){
        return false
    } else
    return ((input % 2) === 0);
}

function isVowel(char)
{
    return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
            char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U' || false;
}

function add(var1, var2) {
    return Number(var1) + Number(var2)
}
