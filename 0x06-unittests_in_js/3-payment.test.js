const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('Testing Util function used in SendPaymentRequestToApi', () => {
  it('Test with 100 and 20', () => {
    const spyOnUtils = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);
    expect(spyOnUtils.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(spyOnUtils.calculateNumber.callCount).to.be.equal(1);

    spyOnUtils.calculateNumber.restore();
  });
});
