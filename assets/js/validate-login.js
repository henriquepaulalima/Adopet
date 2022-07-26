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

function validatePassword(input, requiredMsg, invalidMsg) {
  if (!hasValue(input, requiredMsg)) {
    return false;
  }

  const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  const password = input.value.trim();

  if (!passwordRegex.test(password)) {
    return showError(input, invalidMsg);
  } else {
    return true;
  }
}

const form = document.getElementById('login_form');
const EMAIL_REQUIRED = "Por favor digite um email";
const EMAIL_INVALID = "Por favor digite um email válido";
const PASSWORD_REQUIRED = "Por favor digite uma senha";
const PASSWORD_INVALID = "Por favor digite uma senha válida";

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let emailValid = validateEmail(form.elements["email"], EMAIL_REQUIRED, EMAIL_INVALID);

  let passwordValid = validatePassword(form.elements["password"], PASSWORD_REQUIRED, PASSWORD_INVALID);

  if (emailValid && passwordValid) {
    form.submit();
  }
});