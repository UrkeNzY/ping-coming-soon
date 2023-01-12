const submitButtonElement = document.getElementById("submit-button");
const inputFieldElement = document.querySelector("input");
const errorMessageElement = document.getElementById("error-message");

function validateEmail(event) {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const enteredValue = inputFieldElement.value;
  if (enteredValue.match(mailformat)) {
    inputFieldElement.classList.remove("warning");
    errorMessageElement.textContent = '';
    inputFieldElement.value = '';
    return;
  } else {
    inputFieldElement.classList.add("warning");
    errorMessageElement.textContent = 'Please provide a valid email address';
  }
}

submitButtonElement.addEventListener("click", validateEmail);
