import $ from 'jquery';
import domUpdates from './domUpdates.js'
import Hotel from './Hotel.js'

class Customer {
  constructor(guestObject, visits, orders) {
    this.id = guestObject.id;
    this.name = guestObject.name;
    this.visits = visits;
    this.orders = orders;
    this.allTheRooms;
  }

  displayGuestInfo(hotelRooms) {
    this.allTheRooms = hotelRooms;
    domUpdates.appendCurrentGuestOrders(this.orders);
    this.getPastStays();
    this.getOrderTotal();
  }

  getOrderTotal() {
    let orderTotal = this.orders.reduce((total, order) =>{
      total += order.totalCost
      return total
    }, 0)
    return orderTotal;
    domUpdates.appendOrderTotal(orderTotal);
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
}

export default Customer;