import domUpdates from './domUpdates.js'
import Customer from './Customer.js'


class Hotel {
  constructor(guests, bookings, rooms,  orders) {
    this.guests = guests;
    this.bookings = bookings;
    this.rooms = rooms;
    this.orders = orders;
    this.date;
    this.roomsAvailable;
    this.percentOccupied;
    this.revenue;
    this.bookingRevenue;
    this.guestInfo;

  }

  getCurrentDate() {
    let today = new Date();
    let date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
    this.date = date;
    this.getAndShowInfoToday(date);  
  }

  getAndShowInfoToday(date) {
    domUpdates.appendDate(date)
    this.roomsAvailable = this.calculateVacancies(date);
    this.calculateRoomsBookedToday(date);
    domUpdates.appendRoomsAvailable(this.roomsAvailable);
    this.percentOccupied = this.calculatePercentOccupied(date);
    domUpdates.occupancy(this.percentOccupied);
    this.bookingRevenue =this.calculateBookingsRevenue(date);
    domUpdates.appendBookingRev(this.bookingRevenue); 
  }

  calculateTotalRooms() {
    return this.rooms.length;
  }

  calculateRoomsBookedToday(dateToday) {
    return this.bookings.filter(booking => booking.date === dateToday).length;
  }

  calculateVacancies(date) {
    return this.calculateTotalRooms() - this.calculateRoomsBookedToday(date);
  }

  calculatePercentOccupied(dateToday) {
      return Math.round(this.calculateRoomsBookedToday(dateToday)/this.calculateTotalRooms() * 100); 
  }

  calculateBookingsRevenue(dateToday) {
    // let roomNums =this.bookings.filter(booking => booking.date === dateToday)
    // console.log(roomNums[0].roomNumber);
    let bookingRevenue = this.rooms.reduce((totalBookingRevenue, room) => {
      let roomNum = this.bookings.filter(booking => booking.date === dateToday)[0].roomNumber; 
      if(room.number === roomNum) {
       return totalBookingRevenue += room.costPerNight 
      }
        return totalBookingRevenue;
    }, 0);
    console.log(bookingRevenue);
    return bookingRevenue;
  }

  greetGuest(guestName) {
    if (this.guests.filter(guest => guest.name === guestName).length > 0) {
      domUpdates.appendGuestName(guestName);
      this.compileGuestInfo(guestName);
    } else {
      domUpdates.appendGreetingForNewGuest(guestName);
    }
    // return guestName;
  }

  compileGuestInfo(guestName) {
    let guestId = this.guests.filter(guest => guest.name === guestName)[0].id;
    let guestOrders = this.orders.filter(order => order.userID === guestId);
    let roomsVisited = this.bookings.reduce((datesBooked, booking) => {
      let visitObj = {};
      if (booking.userID === guestId) {
        return visitObj[booking.date] = this.rooms.filter(room => room.number === booking.roomNumber)
      }
      return datesBooked;
    }, {});
    let customer = new Customer(guestId, guestName, guestOrders, roomsVisited);
    console.log(customer);
    return customer;
  }
}

export default Hotel;