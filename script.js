// import { latinToMorseCode } from "./modules/characters.js";

// function textToMorseCode() {
//   const textInput = document.getElementById("textInput").value;

//   textInput = textInput.toUpperCase();
//   const arr1 = textInput.split("");
//   const arr2 = arr1.map((x) => {
//     if (characterMapping[x]) {
//       return characterMapping[x];
//     } else {
//       return x;
//     }
//   });
//   const code = arr2.join(" ");

//   document.getElementById("morseCodeInput").value = code;
// }

// create mapping of characters from latin to morse code
const latinToMorseCode = {
  // latin to morse code
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",

  //   numbers to morse code
  0: "-----",
  1: "..---",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",

  //   puncutation to morse code

  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  ":": "---...",
  "/": "-..-.",
  "-": "-....-",
  "=": "-...-",
  "(": "-.--.",
  ")": "-.--.-",
  "&": ".-...",
  " ": "/",
};

//   - identify/check if the string is in english
//   - might throw error if it is not in english
// - split string

// have a function that takes in a string in latin and translates to more code

export const convertToMorseCode = (string) => {
  if (typeof string !== "string") {
    throw new Error("Invalid parameter type, please return a string");
  }
  return (
    string
      // convert string to uppercase
      .toUpperCase()
      // we want an array of individual characters (split with an empty string)
      .split("")
      // use .map iterator to grab array of english characters and match to morse code characters
      .map((element) => {
        return latinToMorseCode[element]
          ? latinToMorseCode[element]
          : [element];
      })
      // convert array back to string using .join with a space (" ")
      .join(" ")
  );
};

// console.log(convertToMorseCode("SOS SOS"));

let morseCodeToLatin = {};

morseCodeToLatin = Object.entries(latinToMorseCode).reduce((acc, curr) => {
  acc[curr[1]] = curr[0];
  return acc;
}, {});

// console.log(morseCodeToLatin);

// // have a function that takes in a string in morse code and translates to latin

export const convertToLatin = (string) => {
  return string
    .toUpperCase()
    .split(" ")
    .map((element) => {
      return morseCodeToLatin[element] ? morseCodeToLatin[element] : [element];
    })
    .join("");
};

// console.log(convertToLatin("... --- ... / ... --- ..."));

const text = document.getElementById("text");
const morseCode = document.getElementById("morseCode");

text.addEventListener("input", function toMorseCode() {
  morseCode.value = convertToMorseCode(text.value);
  console.log(text.value);
});

morseCode.addEventListener("input", function toLatin() {
  text.value = convertToLatin(morseCode.value);
  console.log(morseCode.value);
});
