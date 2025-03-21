import { expect, test } from "vitest";
import { checkMatch } from "./tttGameBoard";

/* Check Logic */
test("Check match logic (0, 1, 2 should return 0)", () => {
  expect(checkMatch([0, 1, 2])).toBe(0);
});

test("Check match logic (1, 1, 1 should return 1)", () => {
  expect(checkMatch([1, 1, 1])).toBe(1);
});

test("Check match logic (2, 2, 2 should return 2)", () => {
  expect(checkMatch([2, 2, 2])).toBe(2);
});

test("Check match logic (2, 0, 0 should return 0)", () => {
  expect(checkMatch([2, 0, 0])).toBe(0);
});
