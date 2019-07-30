import $ from 'jquery';
import domUpdates from './domUpdates.js'
import Hotel from './Hotel.js'

class Customer {
  constructor(guestObject, visits, orders) {
    this.id = guestObject.id;
    this.name = guestObject.name;
    this.visits = visits;
    this.orders = orders;
  }

    displayGuestInfo() {
    this.getOrders();
    this.getVisits();
    this.getOrderTotal();
  }

  getOrders() {
    $('.current-guest-orders').attr('hidden', false);
    let orders = this.orders.map(order => {  
    $('.current-guest-orders').append(`<tr><td>${'ORDERS:'}</td></tr><tr><td>${order.date}</td><td>${order.food}</td><td>${order.totalCost}</td></tr>`)
    });
  }

  getOrderTotal() {
    let orderTotal = this.orders.reduce((total, order) =>{
      total += order.totalCost
      return total
    }, 0)
    $('.orders-total').append(orderTotal);
  }

  getVisits() {
    console.log(this.visits);
  }
}

export default Customer;