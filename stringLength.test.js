const stringLength = require("./stringLength.js");
const reverseString = require("./stringLength.js");

// describe("String length", () => {
//     test("Compare string length: ", () => {
//         expect(stringLength("123456789123")).toBe(12);
//     });
// });

describe("String reverse", () => {
    test("Compare string : ", () => {
        expect(stringLength("ABC")).toBe("CBA");
    });
});

