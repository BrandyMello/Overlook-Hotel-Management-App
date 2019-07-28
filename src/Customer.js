import domUpdates from './domUpdates.js'
import Hotel from './Hotel.js'

class Customer {
  constructor(id, name, orders, visits) {
    this.id = id;
    this.name = name;
    this.orders = orders;
    this.visits = visits;
    
  }
}

export default Customer;