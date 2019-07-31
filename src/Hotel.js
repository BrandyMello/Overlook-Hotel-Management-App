import domUpdates from './domUpdates.js'


class Hotel {
  constructor(guests, bookings, rooms,  orders) {
    this.guests = guests;
    this.bookings = bookings;
    this.rooms = rooms;
    this.orders = orders;
    this.date;

  }

  getCurrentDate() {
    let today = new Date();
    let date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
    this.date = date;
    domUpdates.appendDate(date)
    this.calculateVacancies(date);
  }

  calculateVacancies(dateToday) {
    return 50 - this.bookings.filter(booking => booking.date === dateToday).length;
  } 

}

export default Hotel;