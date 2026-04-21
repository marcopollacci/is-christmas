import assert from "node:assert/strict";
import test from "node:test";

if (typeof globalThis.Temporal === "undefined") {
  globalThis.Temporal = {
    PlainDate: {
      from(value) {
        if (typeof value === "string") {
          const [year, month, day] = value.split("T")[0].split("-").map(Number);
          return { year, month, day };
        }

        return value;
      },
    },
    Now: {
      plainDateISO() {
        return { year: 2026, month: 12, day: 25 };
      },
    },
  };
}

const { isChristmas } = await import("./main.js");

test("returns true on December 25", () => {
  assert.equal(isChristmas("2026-12-25"), true);
});

test("returns false on any other day", () => {
  assert.equal(isChristmas("2026-12-24"), false);
});

test("accepts an ISO datetime string", () => {
  assert.equal(isChristmas("2026-12-25T00:00:00.000Z"), true);
});

test("accepts an ISO datetime string with an offset", () => {
  assert.equal(isChristmas("2026-12-25T23:59:59+02:00"), true);
});

test("rejects non-string inputs", () => {
  assert.throws(
    () => isChristmas({ year: 2026, month: 12, day: 25 }),
    /Expected an ISO date or ISO datetime string\./,
  );
});

test("uses today when input is missing", () => {
  assert.equal(isChristmas(), true);
});
