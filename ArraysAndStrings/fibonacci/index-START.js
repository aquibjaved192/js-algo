/*
Write a function to return the nth element in Fibonacci sequence,
where the sequence is:
    [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …]
*/


function fibonacci(n) {
    if(n <= 1) {
        return 1;
    } else {
        let prev = 1;
        let current = 1;
        let count = 2;
        while(count <= n) {
            let temp = current;
            current += prev;
            prev = temp;
            count++;
        }
        return current;
    }
}

module.exports = fibonacci