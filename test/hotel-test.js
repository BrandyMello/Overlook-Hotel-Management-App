import users from '../src/sample-users.js';
import rooms from '../src/sample-rooms.js';
import bookings from '../src/sample-bookings.js';
import roomServices from '../src/sample-roomServices.js';
import Hotel from '../src/Hotel';
import Customer from '../src/Customer.js'
import domUpdates from '../src/domUpdates.js'
import chai from 'chai';
import spies from 'chai-spies';

const expect = chai.expect;
chai.use(spies);
chai.spy.on(domUpdates,['appendDate', 'appendRoomsAvailable', 'occupancy', 'appendBookingRev', 'appendOrdersRev', 'appendTotalRevenue', 'appendGuestName', 'appendGreetingForNewGuest', 'appendMenu', 'appendAllRoomsAvailable'], () => {})


describe('Hotel', () => {
  let hotel;
  let customer;

  beforeEach(() => {
    hotel = new Hotel(users, bookings, rooms, roomServices);
  });

  it('should call on other functions to calculate and append to the DOM', () => {
    expect(domUpdates.appendDate).to.have.been.called(1);
    expect(domUpdates.appendRoomsAvailable).to.have.been.called(1);
    expect(domUpdates.occupancy).to.have.been.called(1);
    expect(domUpdates.appendBookingRev).to.have.been.called(1);
    expect(domUpdates.appendOrdersRev).to.have.been.called(1);
    expect(domUpdates.appendTotalRevenue).to.have.been.called(1);   
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

    it('should calculate the number of rooms avaialable to date', () => {
      expect(hotel.calculateVacancies("2019/10/19")).to.equal(6)
  });

  it('should calculate percentage occupied to date', () => {
    expect(hotel.calculatePercentOccupied("2019/10/19")).to.equal(14)
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

  it.skip('should greet guest upon arrival', () => {
    customer = new Customer({id: 4, name: "Brook Christiansen"}, [ { userID: 4, date: '2019/10/19', roomNumber: 5 },
     { userID: 4, date: '2019/08/02', roomNumber: 45 } ], []);
    expect(hotel.greetGuest('Brook Christiansen')).to.eql('Brook Christiansen');
    expect(domUpdates.appendGuestName).to.have.been.called(1);
    expect(domUpdates.appendGreetingForNewGuest).to.have.been.called(1);
    expect(customer.displayGuestInfo).to.have.been.called(1);
  });

  it('should provide a menu', () => {
    expect(hotel.getMenu(roomServices).length).to.eql(5);
    expect(domUpdates.appendMenu).to.have.been.called(1);
  });

  it('should provide a list of available rooms', () => {
    expect(hotel.getRoomsAvailable().length).to.eql(7);
    expect(domUpdates.appendAllRoomsAvailable).to.have.been.called(1);
  });

  it('should add a new guest to the guests database', () => {
    hotel.addNewGuest('Brandy Mello')
    expect(hotel.guests.length).to.equal(5)
  });
});
