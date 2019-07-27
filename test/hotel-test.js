import chai from 'chai';
import spies from 'chai-spies';
import users from '../src/sample-users';
import rooms from '../src/sample-rooms';
import bookings from '../src/sample-bookings';
import roomServices from '../src/sample-roomServices';
import Hotel from '../src/Hotel';

const expect = chai.expect;
chai.use(spies);

let hotel;

describe('Hotel', () => {

  beforeEach(() => {
    hotel = new Hotel(users, bookings, rooms, roomServices);
  });
  
  it('should be a function', () => {
    expect(Hotel).to.be.a('function');
  });

  it('should instantiate an new instance of Hotel', () => {
    expect(hotel).to.be.an.instanceOf(Hotel);
  });

  it('should hold customer data', () => {
    expect(hotel.guests).to.not.eql(undefined);
    console.log(hotel.guests);
  });

    it('should hold booking data', () => {
    expect(hotel.bookings).to.not.eql(undefined);
  });

    it('should hold room data', () => {
    expect(hotel.rooms).to.not.eql(undefined);
  });


    it('should hold room service data', () => {
    expect(hotel.orders).to.not.eql(undefined);
  });

  //property not equal to undefined



});
