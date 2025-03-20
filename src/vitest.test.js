import { expect, test } from "vitest";
import { testAdd } from "./vitest";

test("Adds 1 + 2 to be equal to 3", () => {
  expect(testAdd(1, 2)).toBe(3);
});
