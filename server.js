const fs = require("fs");

// List of file paths to read
const filePaths = ["./file1.txt", "./file2.txt", "./file3.txt"];

// Function to read and print files asynchronously
function readAndPrintFile(filePaths, index) {
  if (index === filePaths.length) {
    console.log("All files read");
    return;
  }
  const filePath = filePaths[index];

  // Read the content of the current file asynchronously
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.log(`Error reading file: ${filePath} : ${err}`);
    } else {
      console.log(`File content of ${filePath} : \n${data}`);
    }

    // Read the next file
    readAndPrintFile(filePaths, index + 1);
  });
}

// Start reading the files
readAndPrintFile(filePaths, 0);
