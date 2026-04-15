const test = require("node:test");
const assert = require("node:assert/strict");
const { isMessageSafe } = require("../index");

test("accepte un message simple", () => {
  const actual = isMessageSafe("bonjour");
  assert.equal(actual, true);
});

test("rejette une tentative XSS simple", () => {
  const actual = isMessageSafe("<script>alert('xss')</script>");
  assert.equal(actual, false);
});

test("rejette un message non texte", () => {
  const actual = isMessageSafe({ texte: "bonjour" });
  assert.equal(actual, false);
});
