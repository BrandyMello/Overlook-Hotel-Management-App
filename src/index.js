import $ from 'jquery';
import './css/base.scss';
import './images/main2.jpg'
import './images/roses.jpg'
import domUpdates from './domUpdates.js'
import Hotel from './Hotel.js'

let guestsData, bookingsData, roomsData, ordersData;
let copperRose;

let guests = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users');
let bookings = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings');
let rooms = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms');
let orders = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/room-services/roomServices');

Promise.all([guests, bookings, rooms,  orders])
  .then(value => Promise.all(value.map(value => value.json())))
  .then(compiledData => {
    guestsData = compiledData[0];
    bookingsData = compiledData[1];
    roomsData = compiledData[2];
    ordersData = compiledData[3];
  });

  setTimeout(() => {
  let copperRose = new Hotel(guestsData, bookingsData, roomsData, ordersData);
  console.log(copperRose.guests);
  console.log(copperRose.bookings);
  console.log(copperRose.rooms);
  console.log(copperRose.orders);
}, 1000);

  domUpdates.appendDate();

  $('.tabs a').on('click', function (event) {
    event.preventDefault();
    $('.tab-now').removeClass('tab-now');
    $(this).parent().addClass('tab-now');
    $('.content div').hide();
    $($(this).attr('href')).show();
});