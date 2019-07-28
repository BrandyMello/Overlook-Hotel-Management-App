
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
  },

  appendGreetingForNewGuest() {
    $('#new-guest-mess').show();
  }

}

export default domUpdates;