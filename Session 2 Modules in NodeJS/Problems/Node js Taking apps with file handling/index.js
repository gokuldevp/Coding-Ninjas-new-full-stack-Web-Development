// Please don't change the pre-written code
// Import the necessary modules here
const fs = require('fs');

const Solution = () => {
  const fileName = "notes.txt";

  // i) Create a file named "notes.txt" and write the phrase "The world has enough coders" to it using the synchronous write method of fs module
  fs.writeFileSync(fileName, "The world has enough coders");

  // ii) Retrive the contents of notes.txt file utilising the fs module's synchronous read method to display them on the console.
  let data = fs.readFileSync(fileName, {encoding:"utf8"});
  console.log(data);

  // iii) Expand the existing content of "notes.txt" by appending the text "BE A CODING NINJA!" using the fs module's synchronous append method.
  fs.appendFileSync(fileName, "BE A CODING NINJA!");

  // iv) Retrieve the updated contents of the "notes.txt" file and display them on the console.
  data = fs.readFileSync(fileName, {encoding:"utf8"});
  console.log(data);
};

Solution();
module.exports = Solution;
