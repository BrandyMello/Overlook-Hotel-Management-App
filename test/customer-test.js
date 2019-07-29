import chai from 'chai';

const expect = chai.expect;

let customer;

describe('Customer', () => {

  beforeEach(() => {
    customer = new Customer(id, name, orders, visits);
  });

  it('should be a function', () => {
    expect(Customer).to.be.a('function');
  });

  it('should instantiate an new instance of Hotel', () => {
    expect(customer).to.be.an.instanceOf(Customer);
  });
});
