const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  it('Testing / returns correct response', (done) => {
    request.get(`${API_URL}/`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('Testing /cart/:id ', (done) => {
    request.get(`${API_URL}/cart/22`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 22');
      done();
    });
  });

  it('Testing /cart/:id ', (done) => {
    request.get(`${API_URL}/cart/-22`, (err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('Testing /cart/:id returns 404 response for non-numeric values in :id', (done) => {
    request.get(`${API_URL}/cart/d200-44a5-9de6`, (err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('Testing /login returns valid response', (done) => {
    request.post(
      `${API_URL}/login`,
      { json: { userName: 'Omar' } },
      (err, res, body) => {
        expect(res.statusCode).to.be.equal(200);
        expect(body).to.be.equal('Welcome Omar');
        done();
      }
    );
  });

  it('Testing /available_payments returns valid response', (done) => {
    request.get(`${API_URL}/available_payments`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body)).to.be.deep.equal({
        payment_methods: { credit_cards: true, paypal: false },
      });
      done();
    });
  });
});
