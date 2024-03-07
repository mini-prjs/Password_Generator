function getAllCharacters() {
  let characters = "";
  for (let i = 65; i <= 90; i++) {
    characters += String.fromCharCode(i);
  }
  for (let i = 97; i <= 122; i++) {
    characters += String.fromCharCode(i);
  }
  for (let i = 48; i <= 57; i++) {
    characters += String.fromCharCode(i);
  }
  characters += "!@#$%^&*()_-+=<>?";
  const shuffled = characters
    .split("")
    .sort(function () {
      return 0.5 - Math.random();
    })
    .join("");
  return shuffled;
}

function getRandomCharacters(length) {
  if (length < 1 || length > 20) {
    return "The length is outside the range";
  }
  const characters = getAllCharacters();
  let randomString = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }

  return randomString;
}

const readline = require("node:readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.question(
  `Enter the length of the password from 1 to 20  `,
  (length) => {
    const randomString = getRandomCharacters(length);
    console.log("Password: ", randomString);
    readline.close();
  }
);
