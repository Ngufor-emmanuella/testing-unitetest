const stringLength = (word) => {
    if (word.length >= 1 && word.length <= 10){
        return word.length;
    }
    else{
        return null;
    }
}

const reverseString = (word) => {
    return [...word].reverse().join('');
}


module.exports = stringLength;
module.exports = reverseString;