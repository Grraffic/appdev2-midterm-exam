const fs = require("fs");

fs.writeFile("message.txt", "Node.js is awesome!", (err) => {
  if (err) {
    console.log("The file doesn't exist", err);
  } else {
    console.log("The file is successfully");
  }

  fs.readFile("message.txt", "utf8", (err, data) => {
    if (err) {
      console.log("the file doesn't exist:", err);
    } else {
      console.log("File content:", data);
    }
  });

  fs.unlink("message.txt", (err) => {
    if (err) {
      console.log("The file doesn't Exist.");
    } else {
      console.log("The file is deleted.");
    }
  });
});
