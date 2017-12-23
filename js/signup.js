$(document).ready(function() {
  var $email = $('#inputEmail');
  var $password = $('#inputPassword');
  var $chekbox = $('.checkbox');
  // asociando eventos a los inpits
  // $email.keydown(function() {
  //   console.log($email);
  // }); evento keydown
  $email.on('input', function(event) {
    // console.log(event.target.value); //conocemos el valor escrito en el input 
    // console.log($(this).val());  conocemos el valor escrito en el input 
    var PATERNEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    console.log(PATERNEMAIL.test($(this).val()));
  });
  $password.on('input', function(evento) {
    console.log($(this).val());
    if ($(this).val().length >= 6) {
      alert('cumple');
    } else {
      alert('no cumple');
    }
    // var PATERNPASSWORD =  /^[0-9]+$/;
    // console.log(PATERNPASSWORD.test($(this).val()));
  });

});