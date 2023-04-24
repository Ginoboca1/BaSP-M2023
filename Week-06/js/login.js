let inputs = document.querySelectorAll("input");
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const submitButton = document.getElementById("submitButton");
const errorAlert = document.getElementsByClassName('error-message');
const arrayError = [];

const emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

const validation = (e) => {
  switch (e.target.name) {
    case "email":
   
      if (!emailRegex.test(e.target.value)) {
        inputEmail.classList.remove("input-correct");
        inputEmail.classList.add("input-error");
      } else {
        inputEmail.classList.remove("input-error");
        inputEmail.classList.add("input-correct");
      }
      break;

    case "password":
      var hasLetter = false;
      var hasNumber = false;

      for (let i = 0; i < e.target.value.length; i++) {
        let charCode = e.target.value.charCodeAt(i);
        if (charCode >= 48 && charCode <= 57) {
          hasNumber = true;
        } else if (
          (charCode >= 65 && charCode <= 90) ||
          (charCode >= 97 && charCode <= 122)
        ) {
          hasLetter = true;
        }
      }
      if (e.target.value.length >= 8 && hasLetter && hasNumber) {
        inputPassword.classList.remove("input-error");
        inputPassword.classList.add("input-correct");
      } else {
        inputPassword.classList.remove("input-correct");
        inputPassword.classList.add("input-error");
      }
      break;
  }
};

inputs.forEach((input) => {
  input.addEventListener("blur", validation);
});

inputs.forEach((input) => {
  input.onfocus = () => {
    input.classList.remove("input-error", "input-correct");
  };
});

submitButton.addEventListener("click", submitEvent);

function submitEvent(e) {
  e.preventDefault()
  var emailCheck = inputEmail.value >= 8 && hasLetter && hasNumber;
  var passCheck = inputPassword.value.length >= 8 && hasLetter && hasNumber;

  if(!emailCheck && !passCheck ){
    arrayError.forEach((error) => {
      alert(error);
    })
    
  } else{
    alert('Email: ' + inputEmail.value + '/n' + 'Password ' + inputPassword.value)
  }
}
