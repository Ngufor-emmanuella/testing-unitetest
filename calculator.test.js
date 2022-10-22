const {add,sub,mul,div} = require("./calculator");

describe("String reverse", () => {
    test("Compare string : ", () => {
        expect(add(1,2)).toBe(3);
        expect(mul(1,2)).toBe(2);
        expect(div(4,2)).toBe(2);
        expect(sub(1,2)).toBe(-1);
    });
});

