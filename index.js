$("#btd_next").click(function(){
  // Random Number from 1 - 100
  var decimal = Math.floor((Math.random() * 100) + 1);
  $('#btd_check_response').data('decimal_val', decimal);
  // Convert to binary
  var binary = decimal.toString(2);

  // Set up UI for new input
  $('#btd_binary_number').html(binary);
  $('#btd_correctness').html('');
  $('#btd_response').val('');
});

$("#btd_check_response").click(function(){

  var current_reponse = $('#btd_response').val();
  var decimal_val = $(this).data('decimal_val');

  console.log(typeof current_reponse);
  console.log(typeof decimal_val);

  if(current_reponse == decimal_val){
    $('#btd_correctness').html('Correct! :)');
  } else {
    $('#btd_correctness').html('Incorrect! :(');
  }

});




$("#dtb_next").click(function(){
  // Random Number from 1 - 100
  var decimal = Math.floor((Math.random() * 100) + 1);
  // Convert to binary
  var binary = decimal.toString(2);
  // Store decimal_val
  $('#dtb_check_response').data('decimal_val', decimal);

  // Set up UI for new input
  $('#dtb_binary_number').html(decimal);
  $('#dtb_correctness').html('');
  $('#dtb_response').val('');
});

$("#dtb_check_response").click(function(){

  var current_reponse = parseInt($('#dtb_response').val().toString(), 2);
  var decimal_val = $(this).data('decimal_val');

  console.log(typeof current_reponse);
  console.log(typeof decimal_val);

  if(current_reponse == decimal_val){
    $('#dtb_correctness').html('Correct! :)');
  } else {
    $('#dtb_correctness').html('Incorrect! :(');
  }

});

// Set up first vals
$("#dtb_next").trigger('click');
$("#btd_next").trigger('click');
