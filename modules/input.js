import { convertToMorseCode, convertToLatin } from "../script.js";

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
