import $ from 'jquery';

const domUpdates = {

  appendDate(date) {
    $('#date').html(date);
  },

  appendRoomsAvailable(roomCount) {
    $('.rooms-available').html(roomCount);
  },

  occupancy(percent) {
    $('.occupancy').html(percent);
  },

  appendBookingRev(bookingRevenue) {
    $('.room-rev').html(` \$${bookingRevenue}`);
  },

  appendOrdersRev(ordersRevenue) {
    $('.order-rev').html(` \$${ordersRevenue}`);
  },

  appendTotalRevenue(totalRevenue) {
    $('.revenue').html(` \$${totalRevenue}`);
  },

  appendGuestName(guestName) {
    $('.guest-name').html(` ${guestName}`);
    $('.current-guest-orders').attr('hidden', false);
    $('#search-guest-name').val('');
  },

  appendGreetingForNewGuest(guestName) {
    $('.new-guest-name').html(guestName)
    $('#new-guest-mess').show();
    $('#search-guest-name').val('');
  },

  appendMenu(menu) {
    let menuList = menu.map(order => { 
    $('.menu-items').append(`<tr aria-label="${order.food}${order.cost}"><td>${order.food}</td><td>\$${order.cost}</td><td><input name="menu-item" class="food-item" type="checkbox" aria-label="${order.food} ${order.cost}" data-id="${order.food}" data-cat="${order.cost}"></td></tr>`)
    });
    return menuList
  },

  appendCurrentGuestOrders(orderData) {
    $('.current-guest-orders').attr('hidden', false);
    let orders = orderData.map(order => {  
    $('.current-guest-orders').append(`<tr><td>${'PAST ORDERS:'}</td></tr><tr><td>${order.date}</td><td>${order.food}</td><td>\$${order.totalCost}</td></tr>`)
    });
  },

  appendOrderTotal(orderTotal) {
    $('.orders-total').append(orderTotal);
  },

  appendAllRoomsAvailable(unbookedRooms) {
    let availableRoomList = unbookedRooms.map(room => {  
    $('.current-rooms-available').append(`<tr><td>${room.number}</td><td>${room.roomType}</td><td>${room.bidet}</td><td>${room.bedSize}</td><td>${room.numBeds}</td><td>${room.costPerNight}</td><td><input name="reservation" class="available-reservation" type="checkbox" aria-label="${room.roomType} bidet ${room.bidet} ${room.bedSize} ${room.numBeds} ${room.costPerNight}" data-id="${room.number}" data-cat="${room.costPerNight}"></td></tr>`)
    });
  },

  appendCurrentGuestVisits(stays, guestName) {
    $('.current-guest-stays').attr('hidden', false);
    $('.current-guest-stays-message').append(`<span class="guest-name">${guestName}</span>'s STAYS AT <span class="hotel-name">The Copper Rose</span>`)
    $('.current-guest-stays').append(`<thead><td>${'Date'}</td><td>${'Room'}</td><td>${'Type'}</td><td>${'Bidet'}</td><td>${'Bed Sizes'}</td><td>${'No. of Beds'}</td><td>${'Rate'}</td></thead>`)
    let pastStays = stays.map(stay => {  
    $('.current-guest-stays').append(`<tr></tr><tr><td>${stay.date}</td><td>${stay.room.number}</td><td>${stay.room.roomType}</td><td>${stay.room.bidet}</td><td>${stay.room.bedSize}</td><td>${stay.room.numBeds}</td><td>${stay.room.costPerNight}</td></tr>`)
    });
  },

  appendNewOrder(cart, cash) {
    $('.new-food-order').attr('hidden', false);
    let totalBill = cash.reduce((total, itemCost) => {
      return total += itemCost
    }, 0)
    let bill = cart.map((item, index) => { 
      $('.new-food-order').append(`<tr><td>${item}</td></tr><tr><td>\$${cash[index]}</td>`);
    });
    $('.new-food-order').append(`</tr><tr><td>Bill Total: \$${totalBill}</td></tr>`);
  },

  appendAllRoomsAvailableByDate(unbookedRooms) {
    $('.rooms-available-by-date').append(`<thead class="table-title"><td class="table-title">ROOMS AVAILABLE TODAY</td></thead>`)
    let availableRoomList = unbookedRooms.map(room => {  
    $('.rooms-available-by-date').append(`<tr><td>${room.number}</td><td>${room.roomType}</td><td>${room.bidet}</td><td>${room.bedSize}</td><td>${room.numBeds}</td><td>${room.costPerNight}</td><td><input name="reservation" class="available-reservation" type="checkbox" aria-label="${room.roomType} bidet ${room.bidet} ${room.bedSize} ${room.numBeds} ${room.costPerNight}" data-id="${room.number}" data-cat="${room.costPerNight}"></td></tr>`)
    });
  },

  appendNewReservation(guestName, newRoomNoBooked, newRoomCostBooked) {
    console.log(guestName, newRoomNoBooked, newRoomCostBooked)
    $('.new-booking-message').append(`${guestName} you are booked in room number ${newRoomNoBooked} for ${newRoomCostBooked}`)
  }
}

export default domUpdates;