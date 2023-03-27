import { getSum } from "./01-test";

describe("get sum", () => {
  it("should return 100 when a = 95, b = 5", () => {
    expect(getSum(95, 5)).toBe(100);
  });
});
