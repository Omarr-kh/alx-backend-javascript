import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new Error('invalid type for amount');
    }
    this._amount = amount;

    if (!(currency instanceof Currency)) {
      throw new Error('invalid type for currency');
    }
    this._currency = currency;
  }

  // getter and setter for amount
  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    if (typeof amount !== 'number') {
      throw new Error('invalid type for amount');
    }
    this._amount = newAmount;
  }

  // getter and setter for name
  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw new Error('invalid type for currency');
    }
    this._currency = newCurrency;
  }

  // return attributes in the format: amount currency_name (currency_code)
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a number');
    }
    return amount * conversionRate;
  }
}
