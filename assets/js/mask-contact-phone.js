function maskPhone() {
  var phoneInput = document.getElementById('phone');
  var phone = phoneInput.value;

  if (phone.length == 1) {
    phone = "(" + phone;
    phoneInput.value = phone;
    return true;
  } if (phone.length == 3) {
    phone =phone + ") ";
    phoneInput.value = phone;
    return true;
  } if (phone.length == 10) {
    phone =  phone + "-";
    phoneInput.value = phone;
    return true;
  }
}