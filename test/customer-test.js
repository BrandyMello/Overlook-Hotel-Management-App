import Hotel from '../src/Hotel';
import Customer from '../src/Customer.js'
import domUpdates from '../src/domUpdates.js'
import chai from 'chai';
import spies from 'chai-spies';

const expect = chai.expect;
chai.use(spies);
chai.spy.on(domUpdates,['appendCurrentGuestOrders', 'appendOrderTotal', 'appendCurrentGuestVisits'], () => {})

describe('Customer', () => {

  let customer;
  beforeEach(() => {
    customer = new Customer({id: 4, name: "Brook Christiansen"}, [ { userID: 4, date: '2019/10/19', roomNumber: 5 },
     { userID: 4, date: '2019/08/02', roomNumber: 45 } ], []);
  });

  it('should be a function', () => {
    expect(Customer).to.be.a('function');
  });

  it('should instantiate an new instance of Customer', () => {
    expect(customer).to.be.an.instanceOf(Customer);
  });

  it('should calculate total order for current customer', () => {
    expect(customer.getOrderTotal()).to.equal(0);
  });

  it.skip('should provide a list of dates of the guest\'s stay and the rooms in which they stayed', () => {
    expect(customer.getPastStays().length).to.eql(21);
  });

  it('should add new order to the database for current customer current customer', () => {
    customer.takeInNewOrder(customer, "Rustic Concrete Sandwich", 14.9)
    expect(customer.orders).to.equal(2);
  });
});
