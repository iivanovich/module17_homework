import { getPercents } from "../getPercents.js";

describe("tests for getPercents function", () => {
    it("normal number", () => expect(getPercents(30, 200)).toBe(60)),
    it("null number", () => expect(getPercents(30, 0)).toBe(60)),
    it("negative percent", () => expect(getPercents(-30, 200)).toBe(60)),
    it("wrong answer", () => expect(getPercents(30, 200)).toBe(0));
  });