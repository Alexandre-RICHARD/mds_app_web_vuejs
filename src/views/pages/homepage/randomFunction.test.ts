import { describe, expect, it } from "vitest";

import { randomFunction } from "./randomFunction";

describe("add", () => {
  it("should multiply per 2 correctly - first part", () => {
    expect(randomFunction(1)).toBe(2);
  });

  it("should multiply per 2 correctly - second part", () => {
    expect(randomFunction(-5)).toBe(-10);
  });
});
