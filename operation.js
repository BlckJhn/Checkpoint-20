// Task 3
// file-operations.js
const fs = require('fs');

// Step 1: Write "Hello Node" to welcome.txt
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) {
        return console.error('Error writing to file:', err);
    }
    console.log('File has been written');

    // Step 2: Read the content of welcome.txt
    fs.readFile('welcome.txt', 'utf8', (err, data) => {
        if (err) {
            return console.error('Error reading file:', err);
        }
        console.log('File content:', data);
    });
});
