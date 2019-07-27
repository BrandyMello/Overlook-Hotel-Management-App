import $ from 'jquery';
import './css/base.scss';
import './images/main2.jpg'
import './images/roses.jpg'
// import './images/cursor-rose.jpg'
import domUpdates from './domUpdates.js'

let bookings, orders, customers, rooms;

// fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings")
// .then(response => response.json())
// .then(dataset => bookings = dataset.bookings)
// .then(dataset => orders = dataset.roomServices)
// .then(dataset => customers = dataset.users)
// .then(dataset => rooms = dataset.rooms)
// // .then(console.log(customers[0], rooms[0], bookings[0], orders[0]))
// .catch(error => console.log(error))

  domUpdates.appendDate();

  $('.tabs a').on('click', function (event) {
    event.preventDefault();
    $('.tab-now').removeClass('tab-now');
    $(this).parent().addClass('tab-now');
    $('.content div').hide();
    $($(this).attr('href')).show();
});