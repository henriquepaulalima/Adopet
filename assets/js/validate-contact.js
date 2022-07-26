function showMessage(input, message, type) {
  const msg = input.parentNode.querySelector("small");
  msg.innerText = message;
  input.className = type ? "success" : "error";
  input.focus();
  return type;
}

function showError(input, message) {
  return showMessage(input, message, false);
}

function showSuccess(input) {
  return showMessage(input, "", true);
}

function hasValue(input, message) {
  if (input.value.trim() === "") {
    return showError(input, message);
  } else {
    return showSuccess(input);
  }
}

function validateEmail(input, requiredMsg, invalidMsg) {
  if (!hasValue(input, requiredMsg)) {
    return false;
  }

  const phoneRegex = /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/;

  const phone = input.value.trim();

  if (!phoneRegex.test(phone)) {
    return showError(input, invalidMsg);
  } else {
    return true;
  }
}

const form = document.getElementById('contact_form');
const name_required = "Por favor digite um nome";
const phone_required = "Por favor digite um número de telefone";
const phone_invalid = "Por favor digite um número de telefone válido";
const pet_name_required = "Por favor digite o nome do pet";
const message_required = "Por favor digite uma mensagem";

form.addEventListener("submit", function (event) {
  event.preventDefault();
  
  let nameValid = hasValue(form.elements["name"], name_required);
  
  let phoneValid = validateEmail(form.elements["phone"], phone_required, phone_invalid);

  let petNameValid = hasValue(form.elements["pet_name"], pet_name_required);

  let messageValid = hasValue(form.elements["message"], message_required);

  if (nameValid && phoneValid && petNameValid && messageValid) {
    form.submit();
  }
});