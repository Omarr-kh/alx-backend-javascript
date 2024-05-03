const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('Testing Async function', () => {
  it('Testing getPaymentTokenFromAPI(success), where success == true', (done) => {
    getPaymentTokenFromAPI(true).then((res) => {
      expect(res).to.deep.equal({ data: 'Successful response from the API' });
      done();
    });
  });
});
