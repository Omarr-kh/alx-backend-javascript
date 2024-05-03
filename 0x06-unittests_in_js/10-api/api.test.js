const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  it('Testing Route /', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('Testing Route /cart/:id', (done) => {
    request.get(`${API_URL}/cart/22`, (_err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.be.equal('Payment methods for cart 22');
      done();
    });
  });

  it('Testing Route /cart/:id', (done) => {
    request.get(`${API_URL}/cart/-22`, (_err, res, _body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it('Testing Route /cart/:id', (done) => {
    request.get(`${API_URL}/cart/dog`, (_err, res, _body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it('Testing Route /login', (done) => {
    request.post(
      `${API_URL}/login`,
      { json: { userName: 'Pinkbrook' } },
      (_err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Pinkbrook');
        done();
      }
    );
  });

  it('Testing Route /available_payments', (done) => {
    request.get(`${API_URL}/available_payments`, (_err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.be.deep.equal({
        payment_methods: { credit_cards: true, paypal: false },
      });
      done();
    });
  });
});
