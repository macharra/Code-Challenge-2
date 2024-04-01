function checkPrime(number) {
    if (number <= 1) {
        return false; // Numbers less than or equal to 1 are not prime
    }

    // We iterate from 2 up to n - 1 to check for divisors
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false; // If the number is divisible by any number, it's not prime
        }
    }

    return true; // If no divisor is found, the number is prime
}

function filterPrimeNumbers(numbers) {
    // filters only prime numbers
    return numbers.filter(number => checkPrime(number));
}
