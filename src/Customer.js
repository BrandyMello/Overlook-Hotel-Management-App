import $ from 'jquery';
import domUpdates from './domUpdates.js'
import Hotel from './Hotel.js'

class Customer {
  constructor(guestObject, visits, orders) {
    this.id = guestObject.id;
    this.name = guestObject.name;
    this.visits = visits;
    this.orders = orders;
    this.cart = [];
    this.allTheRooms;
    this.todaysDate;
  }

  displayGuestInfo(hotelRooms, date) {
    this.allTheRooms = hotelRooms;
    this.todaysDate = date;
    domUpdates.appendCurrentGuestOrders(this.orders);
    this.getPastStays();
    this.getOrderTotal();
  }

  getOrderTotal() {
    let orderTotal = this.orders.reduce((total, order) =>{
      total += order.totalCost
      return total
    }, 0)
    domUpdates.appendOrderTotal(orderTotal);
    return orderTotal;
  }

  getPastStays() {
    let pastRoomNums = this.visits.map(room => room.roomNumber);
    let pastStays = this.allTheRooms.filter(room => pastRoomNums.includes(room.number));
    let result = this.visits.map(visit => {
      let dateOfStay = visit.date;
      let roomObj = pastStays.reduce((stayInfo, room) => {
        if(room.number === visit.roomNumber) {
          stayInfo = room
        } 
        return stayInfo
      }, {})
      return {date: dateOfStay, room: roomObj}
    });
    domUpdates.appendCurrentGuestVisits(result, this.name);
    return result; 
  }

  setupNewGuest(guestName) {
    domUpdates.appendGuestName(guestName);
  }

  takeInNewOrder(guest, cart, cash) {
    let bill = cart.map((item, index) => { 
      return this.orders.push({date: this.todaysDate, food: `${item}`, totalCost: `${cash[index]}`, userID: guest.id })
    });
    return bill;
  }
}

export default Customer;