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
    guestsData = compiledData[0].users;
    bookingsData = compiledData[1].bookings;
    roomsData = compiledData[2].rooms;
    ordersData = compiledData[3].roomServices;
  });

  setTimeout(() => {
  copperRose = new Hotel(guestsData, bookingsData, roomsData, ordersData);
  copperRose.getMenu(ordersData);
  copperRose.getRoomsAvailable();
  // copperRose.getCurrentDate();
  // console.log(copperRose.guests);
  // console.log(copperRose.bookings);
  // console.log(copperRose.rooms);
  // console.log(copperRose.orders);
}, 1000);

  $('.tabs a').on('click', function(e) {
    e.preventDefault();
    $('.tab-now').removeClass('tab-now');
    $(this).parent().addClass('tab-now');
    $('.content div').hide();
    $($(this).attr('href')).show();
  });

  $('.search-btn').on('click', function(e) {
    e.preventDefault();
    let guestName = $('#search-guest-name').val();
    copperRose.greetGuest(guestName);
  });

  $('.add-btn').on('click', function(e) {
    e.preventDefault();
    let newGuest = $('#add-guest-name').val();
    copperRose.addNewGuest(newGuest);
  });

  $('.menu-item-btn').on('click', function(e) {
    e.preventDefault();
    let target = e.target
//nothing happening here
    console.log(  'here', target );
  });

  $('.add-menu-items').on('click', function (e) {
    e.preventDefault();
     let cart = [];
     let cash = [];
    $("input[name='menu-item']:checked").each(function(){cart.push($(this).data('id'));});
    $("input[name='menu-item']:checked").each(function(){cash.push($(this).data('cat'));});
    domUpdates.appendNewOrder(cart, cash);
    console.log(cart, cash)
  });

 //To get the checked checbox data in textarea, you can do:

// $('.food-item').change(function() {
//   $('#t').val(this.checked ? $(this).data('cat') : '');
// });

//   var items = [];
// $("input[name='items[]']:checked").each(function(){items.push($(this).val());});
 



