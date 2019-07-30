
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
  },

  appendAllRoomsAvailable(unbookedRooms) {
    $('.current-rooms-available').append(`<thead><td>${'Room'}</td><td>${'Type'}</td><td>${'Bidet'}</td><td>${'Bed Sizes'}</td><td>${'No. of Beds'}</td><td>${'Rate'}</td></thead>`)
    let availableRoomList = unbookedRooms.map(room => {  
    $('.current-rooms-available').append(`<tr><td>${room.number}</td><td>${room.roomType}</td><td>${room.bidet}</td><td>${room.bedSize}</td><td>${room.numBeds}</td><td>${room.costPerNight}</td><td><button class="room-available-btn" data-id=${room.number}></button></td></tr>`)
    });
    // console.log('heya')
    //For guest previous stays
    // $('.current-guest-visits').attr('hidden', false);
    // let availableRoomList = unbookedRooms.map(room => {  
    // $('.current-guest-visits').append(`<tr><td>${'ORDERS:'}</td></tr><tr><td>${order.date}</td><td>${order.food}</td><td>${order.totalCost}</td></tr>`)
    // });
  }


}

export default domUpdates;