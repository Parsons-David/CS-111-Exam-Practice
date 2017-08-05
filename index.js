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


// TRUTH TABLE STUFF

// Need:
// Define expression format
// Whats and or not
// Random Negation Generator
// Expression Combiner
// DONE:
// Random Variable Creator

/** Process
  * Get Random Number of variables
  * Decide to negate a expression
  * Combine with another expression
  * Until only one exists
  * Oh god this is like a parser....
  */
function generate_random_truth_table_expression(){
  // Get Random Number of unique variables
  var expression_variables = [];
  // MAX VARS SET TO 5, maybe add a "final" var for this.
  for(var i = 0; i < getRandomInt(2, 4); i++){
    // Add each variable as its generated
    var new_var = get_random_letter();
    // Make it unique
    while(expression_variables.includes(new_var)){
      new_var = get_random_letter();
    }
    expression_variables.push(new_var);
  }

  // Unique Variables should be contained in expression_variables at this point.

  // Created tries, since array length will change with appending values.
  var num_uni = expression_variables.length;
  // Create Duplicates
  for(var i = 0; i < num_uni * 5; i++){
    // 5% Chance this happens
    if(getRandomInt(0,19) == 5){
      // 5% chance you add each variable again.
      expression_variables.push(expression_variables[i % num_uni]);
    }
  }

  // TODO : Add random (10% negation later)

  // Start building Expression
  // Continue Combining epressions, until one remains.
  while(expression_variables.length > 1){
    // Pop random index into lhs
    var lhs = expression_variables.splice(getRandomInt(0, expression_variables.length - 1), 1);
    // Pop random index into rhs
    var rhs = expression_variables.splice(getRandomInt(0, expression_variables.length - 1), 1);

    var op = get_random_operator();

    // 2% Chance of Negation
    lhs = (getRandomInt(0, 49) == 19) ? '(NOT ' + lhs + ')' : lhs ;
    rhs = (getRandomInt(0, 49) == 19) ? '(NOT ' + rhs + ')' : rhs ;

    expression_variables.push('(' + lhs + ' ' + op + ' ' + rhs + ')');
  }

  return expression_variables.shift();
}


/** Process
  * Get Random Number of variables
  * Decide to negate a expression
  * Combine with another expression
  * Until only one exists
  * Oh god this is like a parser....
  */

var random_words = ['isSilky', 'isFaded', 'isSeparate', 'isTiny', 'isHurried', 'isAbnormal', 'isUnderstood', 'isInternal', 'isPuny', 'isApathetic', 'isColorful', 'isBitter', 'isHarsh', 'isKnotty', 'isVolatile', 'isGratis', 'isNear', 'isWorkable', 'isLanguid', 'isWrong', 'isComplex', 'isFour', 'isLackadaisical', 'isAdaptable', 'isCareful', 'isSwift'];
var boolean_ops = ['!=', '==', '&&', '||'];

function generate_random_boolean_expression(){
  // Get Random Number of unique variables
  var expression_variables = ['true', 'false'];
  // // MAX VARS SET TO 5, maybe add a "final" var for this.
  // for(var i = 0; i < getRandomInt(2, 4); i++){
  //   // Add each variable as its generated
  //   var new_var = random_words[getRandomInt(0, 25)];
  //   // Make it unique
  //   while(expression_variables.includes(new_var)){
  //     new_var = random_words[getRandomInt(0, 25)];
  //   }
  //   expression_variables.push(new_var);
  // }

  // TODO : Define expression variable values.

  // Unique Variables should be contained in expression_variables at this point.

  // Created tries, since array length will change with appending values.
  var num_uni = expression_variables.length;
  // Create Duplicates
  for(var i = 0; i < num_uni * 10; i++){
    // 10% Chance this happens
    if(getRandomInt(0,9) == 5){
      // 10% chance you add each variable again.
      expression_variables.push(expression_variables[i % num_uni]);
    }
  }

  // TODO : Add random (10% negation later)

  // Start building Expression
  // Continue Combining epressions, until one remains.
  while(expression_variables.length > 1){
    // Pop random index into lhs
    var lhs = expression_variables.splice(getRandomInt(0, expression_variables.length - 1), 1);
    // Pop random index into rhs
    var rhs = expression_variables.splice(getRandomInt(0, expression_variables.length - 1), 1);

    var op = boolean_ops[getRandomInt(0,3)];

    // 2% Chance of Negation
    lhs = (getRandomInt(0, 49) == 19) ? '!' + lhs: lhs ;
    rhs = (getRandomInt(0, 49) == 19) ? '!' + rhs: rhs ;

    expression_variables.push('(' + lhs + ' ' + op + ' ' + rhs + ')');
  }

  return expression_variables.shift();
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Random Variable Creator
function get_random_letter(){
    // Returns Random Captial Letter in the alphabet.
    return String.fromCharCode('A'.charCodeAt() + getRandomInt(0, 25));
}

// Random Variable Creator
function get_random_operator(){
    // Returns Random Captial Letter in the alphabet.
    return (getRandomInt(0, 1) == 0 ? "\\/" : "/\\");
}

$("#tt_next").click(function(){
  // Random Expression
  var expr = generate_random_truth_table_expression();

  // Set up UI for new input
  $('#tt_expression').html(expr);
  $('#tt_correctness').html('');
});

$("#tt_check_response").click(function(){

  // var current_reponse = parseInt($('#dtb_response').val().toString(), 2);
  // var decimal_val = $(this).data('decimal_val');

  // console.log(typeof current_reponse);
  // console.log(typeof decimal_val);

  // if(current_reponse == decimal_val){
  //   $('#tt_correctness').html('Correct! :)');
  // } else {
  //   $('#tt_correctness').html('Incorrect! :(');
  // }

  $('#tt_correctness').html('Nothing to Check Yet! :P');

});

$("#bl_next").click(function(){
  // Random Expression
  var expr = generate_random_boolean_expression();

  // Set up UI for new input
  $('#bl_expression').html(expr);
  $('#bl_correctness').html('');
});

$("#bl_check_response").click(function(){

  // var current_reponse = parseInt($('#bl_response').val().toString(), 2);
  // var decimal_val = $(this).data('decimal_val');

  // console.log(typeof current_reponse);
  // console.log(typeof decimal_val);

  // if(current_reponse == decimal_val){
  //   $('#bl_correctness').html('Correct! :)');
  // } else {
  //   $('#bl_correctness').html('Incorrect! :(');
  // }

  $('#bl_correctness').html('Nothing to Check Yet! :P');

});



// Lazy Setup

// Set up first vals
$("#dtb_next").trigger('click');
$("#btd_next").trigger('click');
$("#tt_next").trigger('click');
$("#bl_next").trigger('click');
