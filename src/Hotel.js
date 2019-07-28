import domUpdates from './domUpdates.js'


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

  greetGuest(guestName) {
    let currentGuest = this.guests.filter(guest => guest.name === guestName);
    if (currentGuest[0].name === guestName) {
      domUpdates.appendGuestName(guestName);
      return currentGuest[0].name;
    } else {
      domUpdates.appendGreetingForNewGuest();
      
    }
    
  }

  // calculateGuestInfo(name) {
  //   this.guestInfo = this.guests.filter(guest => {

  //   });
  // }

}

export default Hotel;