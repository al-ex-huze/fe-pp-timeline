const { parseStamptoWeekNumber }  = require("../parseStamptoWeekNumber");

describe("parseStamptoWeekNumber", () => {
    test("parses timestamp to week number year format", () => {
        const input = "1704067200000";
        const expected = "01-2024"
        const actual = parseStamptoWeekNumber(input);
        expect(actual).toBe(expected);
    })
})