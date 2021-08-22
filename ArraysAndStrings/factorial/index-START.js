/*
Write a function that returns the factorial of 
the provided integer(n). E.g
    factorial(5) // should return 120
*/


function factorial(n) {
    return n === 1 ? 1 : n*factorial(n-1);
}

module.exports = factorial