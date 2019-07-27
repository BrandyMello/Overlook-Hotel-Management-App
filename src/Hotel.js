// import users from '../src/sample-users';
// import rooms from '../src/sample-rooms';
// import bookings from '../src/sample-bookings';
// import roomServices from '../src/sample-roomServices';
import dom from './domUpdates.js'


class Hotel {
  constructor(guests, bookings, rooms,  orders) {
    this.guests = guests;
    this.bookings = bookings;
    this.rooms = rooms;
    this.orders = orders;
  }

}

export default Hotel;