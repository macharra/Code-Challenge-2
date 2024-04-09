const readline = require('readline');

// Create interface to read input from user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to swap case based on user input
function swapCaseForString() {
    rl.question('Enter a string: ', function (input) {
        const swappedString = swapCase(input);
        console.log('Swapped case:', swappedString);
        rl.close();
    });
}

// Function to swap case of characters in a string
function swapCase(string) {
    let swappedString = '';

    // Iterate over each character in the string
    for (let i = 0; i < string.length; i++) {
        let char = string[i];

        // Check and change case
        if (char === char.toUpperCase()) {
            swappedString += char.toLowerCase();
        } else {
            swappedString += char.toUpperCase();
        }
    }

    return swappedString;
}

// Call function to swap case
swapCaseForString();
