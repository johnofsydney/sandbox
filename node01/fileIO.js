const fs = require('fs')

fs.readFile("README.txt", 'utf-8', (error, data) => {
  if (error) {
    console.log("some kind of error: ", error);
    return console.error(error);
  }
  console.log(data)
})

console.log("program finished");


try {
  const data = fs.readFileSync('README.txt', 'utf-8');
  console.log(data);

} catch (error) {
  console.log("error - exiting gracefiully");
  console.log(error);
}
