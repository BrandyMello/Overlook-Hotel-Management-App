import $ from 'jquery';

const domUpdates = {

appendDate() {
  let today = new Date();
  let date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
  $('#date').html(date);
}

}

export default domUpdates;