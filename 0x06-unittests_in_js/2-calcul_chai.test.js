const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    it('num > 0 and num > 0', () => {
      expect(calculateNumber('SUM', 3.0, 5.0)).to.equal(8);
    });

    it('num > 0 and negative numbers', () => {
      expect(calculateNumber('SUM', 1.8, 2.3)).to.equal(4);
    });

    it('negative and negative numbers', () => {
      expect(calculateNumber('SUM', -6.0, -4.0)).to.equal(-10);
    });

    it('0 and num > 0', () => {
      expect(calculateNumber('SUM', 0, 7.0)).to.equal(7);
    });

    it('0 and negative numbers', () => {
      expect(calculateNumber('SUM', 0, -7.0)).to.equal(-7);
    });

    it('0 and 0', () => {
      expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    });
  });

  describe('type == "SUBTRACT"', () => {
    it('num > 0 and num > 0', () => {
      expect(calculateNumber('SUBTRACT', 8.0, 5.0)).to.equal(3);
    });

    it('num > 0 and negative numbers', () => {
      expect(calculateNumber('SUBTRACT', 1.5, -3.5)).to.equal(5);
    });

    it('negative and negative numbers', () => {
      expect(calculateNumber('SUBTRACT', -6.0, -4.0)).to.equal(-2);
    });

    it('0 and num > 0', () => {
      expect(calculateNumber('SUBTRACT', 0, 7.0)).to.equal(-7);
    });

    it('0 and negative numbers', () => {
      expect(calculateNumber('SUBTRACT', 0, -7.0)).to.equal(7);
    });

    it('0 and 0', () => {
      expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
    });
  });

  describe('type == "DIVIDE"', () => {
    it('num > 0', () => {
      expect(calculateNumber('DIVIDE', 8.0, 2.0)).to.equal(4);
    });

    it('numbers with different signs', () => {
      expect(calculateNumber('DIVIDE', -7.0, 2.0)).to.equal(-3.5);
    });

    it('numbers with different signs (alternate)', () => {
      expect(calculateNumber('DIVIDE', 7.0, -2.0)).to.equal(-3.5);
    });

    it('negative numbers', () => {
      expect(calculateNumber('DIVIDE', -7.0, -2.0)).to.equal(3.5);
    });

    it('equal num > 0', () => {
      expect(calculateNumber('DIVIDE', 4.0, 2.0)).to.equal(2);
    });

    it('equal negative numbers', () => {
      expect(calculateNumber('DIVIDE', -4.0, -2.0)).to.equal(2);
    });

    it('equal rounded up numbers', () => {
      expect(calculateNumber('DIVIDE', 3.0, 2.0)).to.equal(1.5);
    });

    it('equal rounded down numbers', () => {
      expect(calculateNumber('DIVIDE', 3.0, 1.0)).to.equal(3);
    });

    it('0 and num > 0 number', () => {
      expect(calculateNumber('DIVIDE', 0, 15.0)).to.equal(0);
    });

    it('0 and negative number', () => {
      expect(calculateNumber('DIVIDE', 0, -15.0)).to.equal(-0);
    });

    it('num > 0 number and 0', () => {
      expect(calculateNumber('DIVIDE', 3.0, 0)).to.equal('Error');
    });

    it('num > 0 number and number rounded down to 0', () => {
      expect(calculateNumber('DIVIDE', 11.0, 0.2)).to.equal('Error');
    });

    it('num > 0 number and number rounded up to 0', () => {
      expect(calculateNumber('DIVIDE', 2.0, -0.2)).to.equal('Error');
    });

    it('negative number and 0', () => {
      expect(calculateNumber('DIVIDE', -1.0, 0)).to.equal('Error');
    });

    it('negative number and number rounded down to 0', () => {
      expect(calculateNumber('DIVIDE', -3.0, 0.2)).to.equal('Error');
    });

    it('negative number and number rounded up to 0', () => {
      expect(calculateNumber('DIVIDE', -4.0, -0.2)).to.equal('Error');
    });

    it('0 and 0', () => {
      expect(calculateNumber('DIVIDE', 0, 0)).to.equal('Error');
    });
  });
});

