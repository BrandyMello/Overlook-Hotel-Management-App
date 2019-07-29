
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
    $('#search-guest-name').val('');

    // $('.tab-now').removeClass('tab-now');
    // $('#tab-3').parent().addClass('tab-now');
    // // $('.content div').hide();
    // $(('#tab-3').attr('href')).show();
  },

  appendGreetingForNewGuest(guestName) {
    $('.new-guest-name').html(guestName)
    $('#new-guest-mess').show();
    $('#search-guest-name').val('');
  }

}

export default domUpdates;