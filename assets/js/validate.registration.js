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

  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const email = input.value.trim();

  if (!emailRegex.test(email)) {
    return showError(input, invalidMsg);
  } else {
    return true;
  }
}

function validatePassword(input, confirmationInput, requiredMsg, invalidMsg, invalidConfirmationMsg) {
  if (!hasValue(input, requiredMsg)) {
    return false;
  }

  const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  const password = input.value.trim();
  const confirmationPassword = confirmationInput.value.trim();

  if (!passwordRegex.test(password)) {
    return showError(input, invalidMsg);
  } if (!(password == confirmationPassword)) {
    return showError(confirmationInput, invalidConfirmationMsg);
  } else {
    return true;
  }
}

const form = document.getElementById('registration_form');
const email_required = "Por favor digite um email";
const email_invalid = "Por favor digite um email válido";
const name_required = "Por favor digite um nome";
const password_required = "Por favor digite uma senha";
const password_invalid = "Por favor digite uma senha válida";
const password_confirmation_invalid = "Por favor confirme sua senha";

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let emailValid = validateEmail(form.elements["email"], email_required, email_invalid);

  let nameValid = hasValue(form.elements["name"], name_required);

  let passwordValid = validatePassword(form.elements["password"], form.elements["confirmation_password_text"], password_required, password_invalid, password_confirmation_invalid);

  if (emailValid && nameValid && passwordValid) {
    form.submit();
  }
});