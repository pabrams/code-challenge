
const rev = str => [...str].reverse().join('');

var sum = 0;
for (let i=1; i< 10000; i++){
    const text = i.toString();
    const reverseText = rev(text);
    if (text == reverseText){
        sum += i;
    }
}
console.log ("sum of palindromes under 10,000: " + sum);
