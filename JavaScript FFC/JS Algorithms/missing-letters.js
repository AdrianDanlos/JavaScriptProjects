let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let inputArray;
let alphabetFirstIndex;

function fearNotLetter(str) {
    inputArray = str.split("");
    let inputFirstLetter = inputArray[0];
    alphabetFirstIndex = alphabet.indexOf(inputFirstLetter);
    let alphabetFragment = alphabet.filter(findAlphabetFragment);
    return findMissingLetter(alphabetFragment);
}

function findAlphabetFragment(num, index) {
    if(index >= alphabetFirstIndex && index < (alphabetFirstIndex + inputArray.length)) {
        return num;
    }
}

function findMissingLetter(alphabetFragment) {
    for (let i = 0; i < alphabetFragment.length; i++) {
        if(alphabetFragment[i] !== inputArray[i]){
            return alphabetFragment[i];
        }
    }
}

console.log(fearNotLetter("abcdefghijklmopqrstuvwxyz"));
