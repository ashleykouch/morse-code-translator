import { convertToMorseCode, convertToLatin } from "./script.js";

describe("Test cases for a function that translates english characters to morse code", () => {
  it("it provides the correct translation for english to morse code", () => {
    expect(convertToMorseCode("SOS")).toBe("... --- ...");
    expect(convertToMorseCode("hello")).toBe(".... . .-.. .-.. ---");
  });
});

describe("Test cases for a function that translates morse code to english characters", () => {
  it("it provides the correct translation for morse code to english", () => {
    expect(convertToLatin("... --- ...")).toBe("SOS");
    expect(convertToLatin("-... -.-- .")).toBe("BYE");
  });
});
