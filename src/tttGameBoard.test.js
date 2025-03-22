import { expect, test } from "vitest";
import { CheckMatch } from "./tttGameBoard";

/* Check Logic */
test("Check match logic (0, 1, 2 should return 0)", () => {
  expect(CheckMatch([0, 1, 2])).toBe(0);
});

test("Check match logic (1, 1, 1 should return 1)", () => {
  expect(CheckMatch([1, 1, 1])).toBe(1);
});

test("Check match logic (2, 2, 2 should return 2)", () => {
  expect(CheckMatch([2, 2, 2])).toBe(2);
});

test("Check match logic (2, 0, 0 should return 0)", () => {
  expect(CheckMatch([2, 0, 0])).toBe(0);
});
