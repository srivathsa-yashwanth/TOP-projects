function capitalize(string){
    return string[0].toUpperCase() + string.slice(1);
}


function reverseString(string){
    let reversed = '';
    for (let i = string.length-1; i >=0 ; i--){
        reversed += string[i];
    }
    return reversed;
}

function calculator(){
    const add = (a,b) => {return a+b};
    const sub = (a,b) => {return a-b};
    const mul = (a,b) => {return a*b};
    const div = (a,b) => {return a/b};

    return { add, sub, mul, div}

}

function caesarCipher(string,shift){
    shift = shift%26;
    let encrypted = '';
    const reference = 'abcdefghijklmnopqrstuvwxyz';
    for (let letter of string){
        if (letter == ' '){
            encrypted += ' ';
        }
        else {
        let current = reference.indexOf(letter);
        let newLetter = reference[current+shift];
        encrypted += newLetter;
        }
    }

    return encrypted;

}

function analyzeArray(array){
    let total = 0;
    let min = Infinity;
    let max = -Infinity;
    let length = 0;
    let average = 0;

    for (let num of array){
        length += 1;
        total += num;
        if (num < min) min = num;
        if (num > max) max = num;
    }
    average = total/length;
    return {average, min, max, length};
}




module.exports = {
    capitalize, reverseString, calculator, caesarCipher, analyzeArray
}