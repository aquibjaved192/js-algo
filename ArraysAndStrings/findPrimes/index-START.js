/*
  For a given number, find all the prime numbers from zero to that number.
*/

function isPrime(num) {
  if(num === 2) {
    return true;
  }
  for(let i=2; i<=Math.sqrt(num); i++) {
    if(num%i === 0) {
      return false;
    }
  }
  return true;
}

function findPrimes(num) {
  const primes = [];
  for(let i=2; i <= num; i++) {
    if(isPrime(i)){
      primes.push(i);
    }
  }
  return primes;
}

module.exports = findPrimes;