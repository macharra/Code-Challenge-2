const readline = require('readline');

// Create interface to read input from user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to filter prime numbers based on user input
function filterPrimes() {
    rl.question('Enter numbers separated by spaces: ', function (input) {
        const numbers = input.split(' ').map(num => parseInt(num));
        const primeNumbers = filterPrimeNumbers(numbers);
        console.log('Prime numbers:', primeNumbers);
        rl.close();
    });
}

// Function to check if a number is prime
function checkPrime(number) {
    if (number <= 1) {
        return false; // Numbers less than or equal to 1 are not prime
    }

    // Iterate from 2 up to n - 1 to check for divisors
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false; // If the number is divisible by any number, it's not prime
        }
    }

    return true; // If no divisor is found, the number is prime
}

// Function to filter prime numbers from an array of numbers
function filterPrimeNumbers(numbers) {
    // Filter only prime numbers
    return numbers.filter(number => checkPrime(number));
}

// Call function to filter prime numbers
filterPrimes();
