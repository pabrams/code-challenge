const dontAddNumbersGreaterThanThis = 10000;

function sumOddFibonacciLessThan(prevPrevFibo, prevFibo, sum){
    let nextFibo = prevFibo + prevPrevFibo;
    console.log(`${prevPrevFibo} + ${prevFibo} = ${nextFibo}; running sum is ${sum} before adding that result`);   
    if (nextFibo >= dontAddNumbersGreaterThanThis){
        return sum;
    }
    if (nextFibo % 2 == 1){
        sumOddFibonacciLessThan( prevFibo, nextFibo, sum + nextFibo);
    }else{
        sumOddFibonacciLessThan( prevFibo, nextFibo, sum);
    }

}

console.log(sumOddFibonacciLessThan(0, 1, 1));
