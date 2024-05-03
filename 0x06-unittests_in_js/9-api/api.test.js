const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  it('Testing Route /', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('Testing Route /cart/:id', (done) => {
    request.get(`${API_URL}/cart/22`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 22');
      done();
    });
  });

  it('Testing Route /cart/:id', (done) => {
    request.get(`${API_URL}/cart/-22`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('Testing Route /cart/:id', (done) => {
    request.get(`${API_URL}/cart/dog`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
});
