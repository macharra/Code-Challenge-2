const readline = require('readline');

// Create interface to read input from user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to generate range based on user input
function generateRange() {
    rl.question('Enter the start value: ', startInput => {
        const start = parseInt(startInput);

        rl.question('Enter the end value: ', endInput => {
            const end = parseInt(endInput);
            const result = range(start, end);
            console.log('Generated range:', result);
            rl.close();
        });
    });
}

// Function to generate range
function range(start, end) {
    let array = [];
    let increment;

    // Define the increment
    if (end >= start) {
        increment = 1;
    } else {
        increment = -1;
    }

    // Generate the array using a loop
    for (let i = start; end >= start ? i <= end : i >= end; i += increment) {
        array.push(i);
    }

    return array;
}

// Call function to generate range
generateRange();
