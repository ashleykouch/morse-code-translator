import characterMapping from "./characters.js";

function textToMorseCode() {
  const textInput = document.getElementById("textInput").value;

  textInput = textInput.toUpperCase();
  const arr1 = textInput.split("");
  const arr2 = arr1.map((x) => {
    if (characterMapping[x]) {
      return characterMapping[x];
    } else {
      return x;
    }
  });
  const code = arr2.join(" ");

  document.getElementById("morseCodeInput").value = code;
}
