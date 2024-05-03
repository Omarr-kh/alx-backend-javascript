const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('Testing the rounding and correct sum', () => {
  it('4 & 4', () => {
    assert.equal(calculateNumber(4, 4), 8);
  });

  it('1.49 & 1.49', () => {
    assert.equal(calculateNumber(1.49, 1.49), 2);
  });

  it('1.5 & 5.49', () => {
    assert.equal(calculateNumber(1.5, 5.49), 7);
  });

  it('-2.3 & 4', () => {
    assert.equal(calculateNumber(-2.3, 4), 2);
  });

  it('-2.3 & -4', () => {
    assert.equal(calculateNumber(-2.3, -4), -6);
  });

  it('-5.8 & 1', () => {
    assert.equal(calculateNumber(-5.8, 1), -5);
  });

  it('-2.8 & -10', () => {
    assert.equal(calculateNumber(-2.8, -10), -13);
  });

  it('12599 & 44460', () => {
    assert.equal(calculateNumber(12599, 44460), 57059);
  });
});
