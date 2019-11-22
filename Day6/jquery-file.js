$(document).ready(function() {
  $('.btn').click(function(event) {
    if (!$('#email').val()) {
      $('#emailError').text('Email không được để trống');
    }
    if (!$('#password').val()) {
      $('#passwordError').text('Password không được để trống');
    }

    if ($('#email').val() && $('#password').val()) {
      alert('Submit thành công')
    }

    event.preventDefault();
    // return false;
  })
})
