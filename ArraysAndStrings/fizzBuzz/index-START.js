/*
    Write a program that prints the numbers from 1 to n. But for 
    multiples of three print “Fizz” instead of the number and for 
    the multiples of five print “Buzz”. For numbers which are 
    multiples of both three and five print “FizzBuzz”.
*/



function fizzBuzz(n) {
    let count = 1;
    while(count <= n) {
        if(count%15 === 0) {
            console.log("fizzbuzz");
        } else if(count%3 === 0) {
            console.log("fizz");
        } else if(count%5 === 0) {
            console.log("buzz")
        } else {
            console.log(count)
        }
        count++;
    }
}


module.exports = fizzBuzz