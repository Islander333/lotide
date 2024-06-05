const assert = require('chai').assert;
const tail = require("../tail");



describe ("#tail", () => {
  it("returns [2, 3, 4] for [1, 2, 3, 4]", () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });
  it("returns [5, 6, 7] for [4, 5, 6, 7]", () => {
    assert.deepEqual(tail([4, 5, 6, 7]), [5, 6, 7]);
  });
  it("returns [5, 6, 7] for [5, 6, 7] and doesn't change the original array", () => {
    const originalArray = [5, 6, 7];
    const result = tail(originalArray);
    assert.deepEqual(result, [6, 7]);
    assert.deepEqual(originalArray, [5, 6, 7]);
  });
  it("returns ['lighthouse', 'labs'] for ['hello', 'lighthouse' 'labs']", () => {
    assert.deepEqual(tail(['hello', 'lighthouse', 'labs']), ['lighthouse', 'labs']);
  });
});
