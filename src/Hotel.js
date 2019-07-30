import domUpdates from './domUpdates.js'
import Customer from './Customer.js'


class Hotel {
  constructor(guests, bookings, rooms,  orders) {
    this.guests = guests;
    this.bookings = bookings;
    this.rooms = rooms;
    this.orders = orders;
    this.date = this.getCurrentDate();
    this.roomsAvailable;
    this.percentOccupied;
    this.revenue;
    this.bookingRevenue;
    this.ordersRevenue;
    this.guestInfo;
  }

  getCurrentDate() {
    let today = new Date();
    let day = String(today.getDate()).padStart(2, '0');
    let month = String(today.getMonth() +1).padStart(2, '0');
    let year = today.getFullYear();
    let date = `${year}/${month}/${day}`
    this.getAndShowInfoToday(date);
    return date;  
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
    this.ordersRevenue = this.calculateOrdersRevenue(date);
    domUpdates.appendOrdersRev(this.ordersRevenue);
    this.revenue = this.calculateTotalRevenue(date);
    domUpdates.appendTotalRevenue(this.revenue);
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
    let bookingRevenue = this.rooms.reduce((totalBookingRevenue, room) => {
      let roomNums = this.bookings.filter(booking => booking.date === dateToday);
      if(roomNums.length > 0 && room.number === roomNums[0].roomNumber) {
       return totalBookingRevenue + room.costPerNight 
      }
        return totalBookingRevenue;
    }, 0);
    return bookingRevenue;
  }

  calculateOrdersRevenue(dateToday) {
    return this.orders.reduce((totalFoodRev, order) => {
      if(order.date === dateToday) {
        return totalFoodRev + order.totalCost;
      }
      return totalFoodRev;
    }, 0);
  }

  calculateTotalRevenue(dateToday) {
    return this.calculateOrdersRevenue(dateToday) + this.calculateBookingsRevenue(dateToday);
  }
  
  greetGuest(guestName) {
    if (this.guests.filter(guest => guest.name === guestName).length > 0) {
      domUpdates.appendGuestName(guestName);
      let guestObj = this.guests.find(guest => guest.name === guestName);
      let guestVisits = this.bookings.filter(booking => booking.userID === guestObj.id);
      let guestOrders = this.orders.filter(order => order.userID === guestObj.id);
      console.log(guestOrders)
      let customer = new Customer(guestObj, guestVisits, guestOrders);
      customer.displayGuestInfo();
    } else {
      domUpdates.appendGreetingForNewGuest(guestName);
    }
    return guestName;
  }

  getMenu(orders) {
    let menu = orders.reduce((menuItems, order) => {
      if (!menuItems.includes(order.food)) {
        let item = {}
        item['food'] = order.food;
        item['cost'] = order.totalCost;
        menuItems.push(item)
      }
      return menuItems;
    }, []);
    domUpdates.appendMenu(menu);
    return menu
  }
}

export default Hotel;