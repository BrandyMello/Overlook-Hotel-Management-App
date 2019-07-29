import $ from 'jquery';
import domUpdates from './domUpdates.js'
import Hotel from './Hotel.js'

class Customer {
  constructor(id, name, orders, visits) {
    this.id = id;
    this.name = name;
    this.orders = orders;
    this.visits = visits;
    console.log(this.orders)
    console.log(this.visits)

  }

  getOrders() {
    $('.current-guest-orders').attr('hidden', false);
    let orders = this.orders.map(order => {  
    $('.current-guest-orders').append(`<tr><td>${order.date}</td><td>${order.food}</td><td>${order.totalCost}</td></tr>`)
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
    // let visits = this.visits.map(visit => )
  }
}

export default Customer;