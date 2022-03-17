const fs = require("fs");

fs.readFile("./hello.txt", (err, data) => {
  if (err) {
    console.log("errooorrr");
  }
  console.log("1", data.toString("utf8"));
});

const file = fs.readFileSync("./hello.txt");
console.log("2", file.toString());

// Append
// fs.appendFile("./hello.txt", "Hello there", (err) => {
//   if (err) {
//     console.log("err");
//   }
// });

// Write
// fs.writeFile("bye.txt", "sad to see you go", (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

// DElete
fs.unlink("./bye.txt", (err) => {
  if (err) {
    console.log(err);
  }

  console.log("Inception");
});
