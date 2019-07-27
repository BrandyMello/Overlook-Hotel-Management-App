import $ from 'jquery';
import './css/base.scss';
import './images/main2.jpg'
import './images/roses.jpg'
import domUpdates from './domUpdates.js'

  domUpdates.appendDate();

  $('.tabs a').on('click', function (event) {
    event.preventDefault();
    $('.tab-now').removeClass('tab-now');
    $(this).parent().addClass('tab-now');
    $('.content div').hide();
    $($(this).attr('href')).show();
});