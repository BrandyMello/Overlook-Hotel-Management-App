
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

  appendGuestName(guestName) {
    $('.guest-name').html(` ${guestName}`);
    $('#search-guest-name').val('');
  },

  appendGreetingForNewGuest(guestName) {
    $('.new-guest-name').html(guestName)
    $('#new-guest-mess').show();
    $('#search-guest-name').val('');
  }

}

export default domUpdates;