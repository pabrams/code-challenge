const integerToRomanNumeral = (n) => {
    const romanNumerals = {
        M:  1000,
        CM: 900,
        D:  500,
        CD: 400,
        C:  100,
        XC: 90,
        L:  50,
        XL: 40,
        X:  10,
        IX: 9,
        V:  5,
        IV: 4,
        I:  1,
    };
    let numeral = '';

    for (i in romanNumerals) {
        numeral += i.repeat(Math.floor(n / romanNumerals[i]));
        n %= romanNumerals[i];
    }
    return numeral;
}


const countChars = (str, ch) => {
    let count = 0;
    for (let i= 0; i< str.length; i++){
        if (str[i] == ch){
            count+=1;
        }
    }
    return count;
}
let times = 0;
for (let num = 1; num<=2660; num++){
    const numeral = integerToRomanNumeral(num);
    times += countChars(numeral, 'X');

    console.log("CONVERT " + num + " to numeral: " +  numeral + "; X times: " + times);
}
console.log("number of times 'X' occurs in the roman numberals from 1 to 2,660: " + times);