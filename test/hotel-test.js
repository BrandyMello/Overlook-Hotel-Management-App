import chai from 'chai';
import spies from 'chai-spies';
import users from '../src/sample-users.js';
import rooms from '../src/sample-rooms.js';
import bookings from '../src/sample-bookings.js';
import roomServices from '../src/sample-roomServices.js';
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

  it('should hold accurate customer data', () => {
    expect(hotel.guests).to.not.eql(undefined);
    expect(hotel.guests[0].name).to.eql("Matilde Larson");
    expect(hotel.guests[1].id).to.eql(2);
  });

    it('should hold accurate booking data', () => {
    expect(hotel.bookings).to.not.eql(undefined);
    expect(hotel.bookings[0].userID).to.eql(4);
    expect(hotel.bookings[1].date).to.eql("2019/10/30");
    expect(hotel.bookings[2].roomNumber).to.eql(41);
  });

    it('should hold accurate room data', () => {
    expect(hotel.rooms).to.not.eql(undefined);
    expect(hotel.rooms[0].number).to.eql(1);
    expect(hotel.rooms[1].roomType).to.eql("single room");
    expect(hotel.rooms[2].bidet).to.eql(false);
    expect(hotel.rooms[3].bedSize).to.eql("full");
    expect(hotel.rooms[4].numBeds).to.eql(2);
    expect(hotel.rooms[5].costPerNight).to.eql(211.42);
  });

    it('should hold accurate room service data', () => {
    expect(hotel.orders).to.not.eql(undefined);
    expect(hotel.orders[0].userID).to.eql(14);
    expect(hotel.orders[1].date).to.eql("2019/10/18");
    expect(hotel.orders[2].food).to.eql("Tasty Wooden Sandwich");
    expect(hotel.orders[3].totalCost).to.eql(14.87);
  });

    it('should calculate total rooms', () => {
    expect(hotel.calculateTotalRooms()).to.equal(7)
  });

    it('should calculate rooms occupied to date', () => {
    expect(hotel.calculateRoomsBookedToday("2019/10/19")).to.equal(1)
  });

     it('should calculate rooms avaialable to date', () => {
    expect(hotel.calculateVacancies("2019/10/19")).to.equal(6)
  });

  it('should calculate percentage occupied to date', () => {
    expect(hotel.calculatePercentOccupied("2019/10/19")).to.equal(14)
  });

  it('should greet guest upon arrival', () => {
    const customer = new Customer(guestId, guestName, guestOrders, roomsVisiteds)
    expect(hotel.greetGuest('Brook Christiansen')).to.be.a.equal({ id: 4, name: 'Brook Christiansen', orders: [], visits: [
      {"2019/10/19": {
        number: 5,
        roomType: "junior suite",
        bidet: false,
        bedSize: "king",
        numBeds: 2,
        costPerNight: 246.65 }
    }, {
      "2019/08/02": {
        number: 45,
        roomType: "junior suite",
        bidet: false,
        bedSize: "full",
        numBeds: 2,
        costPerNight: 301.62 }
      }] 
    });
  });

  it('should compile guest information upon arrival', () => {
    // hotel.compileGuestInfo('Brook Christiansen')
    // var customer = new Customer;
    expect(hotel.compileGuestInfo('Brook Christiansen')).to.be.an.instanceOf(Customer);
  });

  it('should calculate total bookings revenue for today\'s date', () => {
    expect(hotel.calculateBookingsRevenue("2019/09/01")).to.equal(405.13);
  });

  it('should calculate total orders revenue for today\'s date', () => {
    expect(hotel.calculateOrdersRevenue("2019/09/01")).to.equal(10.26);
  });

  it('should calculate total revenue for today\'s date', () => {
    expect(hotel.calculateTotalRevenue("2019/09/01")).to.equal(415.39);
  });
});
