function swapCase(string) {
    let swappedString = '';

    // Iterate over each character in the string
    for (let i = 0; i < str.length; i++) {
        let char = string[i]; // 

        //check to see and change case
        if (char === char.toUpperCase()) {
            swappedString += char.toLowerCase();
        } else {
            swappedString += char.toUpperCase();
        }
    }

    return swappedString;
}


