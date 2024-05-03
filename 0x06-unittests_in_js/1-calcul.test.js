const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    it('num > 0 and num > 0', () => {
      assert.strictEqual(calculateNumber('SUM', 3.0, 5.0), 8);
    });

    it('num > 0 and negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1.8, 2.3), 4);
    });

    it('negative and negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -6.0, -4.0), -10);
    });

    it('0 and num > 0', () => {
      assert.strictEqual(calculateNumber('SUM', 0, 7.0), 7);
    });

    it('0 and negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 0, -7.0), -7);
    });

    it('0 and 0', () => {
      assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
    });
  });

  describe('type == "SUBTRACT"', () => {
    it('num > 0 and num > 0', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 8.0, 5.0), 3);
    });

    it('num > 0 and negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, -3.5), 5);
    });

    it('negative and negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -6.0, -4.0), -2);
    });

    it('0 and num > 0', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0, 7.0), -7);
    });

    it('0 and negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0, -7.0), 7);
    });

    it('0 and 0', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0);
    });
  });

  describe('type == "DIVIDE"', () => {
    it('num > 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 8.0, 2.0), 4);
    });

    it('numbers with different signs', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -7.0, 2.0), -3.5);
    });

    it('numbers with different signs (alternate)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 7.0, -2.0), -3.5);
    });

    it('negative numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -7.0, -2.0), 3.5);
    });

    it('equal num > 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 4.0, 2.0), 2);
    });

    it('equal negative numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -4.0, -2.0), 2);
    });

    it('equal rounded up numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 3.0, 2.0), 1.5);
    });

    it('equal rounded down numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 3.0, 1.0), 3);
    });

    it('0 and num > 0 number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0, 15.0), 0);
    });

    it('0 and negative number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0, -15.0), -0);
    });

    it('num > 0 number and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 3.0, 0), 'Error');
    });

    it('num > 0 number and number rounded down to 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 11.0, 0.2), 'Error');
    });

    it('num > 0 number and number rounded up to 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.0, -0.2), 'Error');
    });

    it('negative number and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -1.0, 0), 'Error');
    });

    it('negative number and number rounded down to 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -3.0, 0.2), 'Error');
    });

    it('negative number and number rounded up to 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -4.0, -0.2), 'Error');
    });

    it('0 and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0, 0), 'Error');
    });
  });
});

