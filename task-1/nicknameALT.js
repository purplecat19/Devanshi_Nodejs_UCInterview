//alternate code that works on vs code

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const surnames = ["Geller", "Tribbiani", "Buffay", "Green", "Bing", "Hannigan", "Gunther"];

rl.question("Enter your first name: ", (firstName) => {
  const firstPart = firstName.padEnd(4, "*").slice(0, 4);
  const now = Date.now();
  const index = now % surnames.length;
  const nickname = `${firstPart} ${surnames[index]}`;

  console.log("Your Friends nickname is:", nickname);
  rl.close();
});
