const quote = "Dealing with failure is easy: Work hard to improve. Success is also easy to handle: You've solved the wrong problem. Work hard to improve."

function isVowel(x) {
    return (
        x == "A" || 
        x == "E" || 
        x == "I" || 
        x == "O" || 
        x == "U" ||
        x == "a" || 
        x == "e" || 
        x == "i" || 
        x == "o" || 
        x == "u" 
    );
}

function sumOfSentence(str){
    let sum = 0;
    // loop over quote by char
    for (let i=0; i< str.length; i++){
        char = str.charAt(i);
        if (isVowel(char)){
            // for vowels, add the inverse of their ascii values
            sum += (0 - (char.charCodeAt(0)))
        } else {
            sum += char.charCodeAt(0);
        }
    }
    return sum;
}
export { sumOfSentence };
console.log("The sum of the ascii values of the connsonants, and the negative ascii values of the vowels, in the sentence '" + quote + "', is: " + sumOfSentence(quote));
