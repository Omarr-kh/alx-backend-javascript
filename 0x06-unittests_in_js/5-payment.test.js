const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('Testing Utils behavior', () => {
  let spyOnUtils;
  let spyOnConsole;

  beforeEach(() => {
    spyOnUtils = sinon.spy(Utils, 'calculateNumber');
    spyOnConsole = sinon.spy(console, 'log');
  });

  afterEach(() => {
    spyOnUtils.restore();
    spyOnConsole.restore();
  });

  it('Testing with (100, 20)', () => {
    sendPaymentRequestToApi(100, 20);

    expect(spyOnUtils.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(spyOnConsole.calledOnceWithExactly('The total is: 120')).to.be.true;
  });

  it('Testing with (10, 10)', () => {
    sendPaymentRequestToApi(10, 10);

    expect(spyOnUtils.calledOnceWithExactly('SUM', 10, 10)).to.be.true;
    expect(spyOnConsole.calledOnceWithExactly('The total is: 20')).to.be.true;
  });
});
