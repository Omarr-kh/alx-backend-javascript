const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('Testing Util function used in SendPaymentRequestToApi', () => {
  it('Test with 100 and 20', () => {
    const spyOnConsole = sinon.spy(console);
    const funStub = sinon.stub(Utils, 'calculateNumber');

    funStub.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(funStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(funStub.callCount).to.be.equal(1);
    expect(spyOnConsole.log.calledWith('The total is: 10')).to.be.true;
    expect(spyOnConsole.log.callCount).to.be.equal(1);
    funStub.restore();
    spyOnConsole.log.restore();
  });
});
