let inputs = document.querySelectorAll(".input");
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const submitButton = document.getElementById("submitButton");
const errorAlert = document.getElementsByClassName("error-message");
var arrayError = [];

const emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

const validation = (e) => {
  switch (e.target.name) {
    case "email":
      if (e.target.value.length === 0) {
        inputEmail.classList.add("input-error");
        arrayError[0] = "Email required";
      } else if (!emailRegex.test(e.target.value)) {
        inputEmail.classList.remove("input-correct");
        inputEmail.classList.add("input-error");
        arrayError[1] = "Please insert a email correct format";
      } else {
        inputEmail.classList.remove("input-error");
        inputEmail.classList.add("input-correct");
      }
      break;

    case "password":
      var hasLetter = false;
      var hasNumber = false;

      if (e.target.value.length === 0) {
        inputPassword.classList.remove("input-correct");
        inputPassword.classList.add("input-error");
        arrayError[2] = 'Password requerid';
      } else {
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
          arrayError[3] = "password may have contain 8 characters (letters, numbers)";
        }
      }
      break;
  }
};

inputs.forEach((input) => {
  input.addEventListener("blur", validation);
});

inputs.forEach((input) => {
  input.onfocus = () => {
    arrayError = [];
    input.classList.remove("input-error", "input-correct");
  };
});

submitButton.addEventListener("click", submitEvent);

function submitEvent(e) {
  e.preventDefault();
  var messageError = "";
  if (arrayError.length === 0) {
    if((!inputEmail.value) || (!inputPassword)){
      alert('All fields are required')
    } else{
      alert(
        "Email: " + inputEmail.value + "\n" + "Password: " + inputPassword.value
      );
    }
  } else {
    arrayError.forEach((error) => {
      if (error.length !== 0) {
        messageError += error + "\n";
      }
      alert(messageError);
    });
  }
}
