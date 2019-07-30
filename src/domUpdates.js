
// import Hotel from './src/Hotel.js'
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
    $('.menu-items').append(`<tr><td>${order.food}</td><td>${order.cost}</td><td><button class="menu-item-btn" data-id=${order.food}></button></td></tr>`)
    });
    return menuList
  }


}

export default domUpdates;