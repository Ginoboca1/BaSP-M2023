const form = document.getElementById("form");
const inputs = document.querySelectorAll("input");

const inputName = document.getElementById("name");
const inputLastName = document.getElementById("lastname");
const inputEmail = document.getElementById("email");
const inputUser = document.getElementById("user");
const inputPassword = document.getElementById("password");
const inputReset = document.getElementById("reset");

const emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

const validation = (e) => {
  switch (e.target.name) {
    case "name":
      if (e.target.value.length >= 3) {
        inputName.classList.remove("input-error");
        inputName.classList.add("input-correct");
      } else {
        inputName.classList.add("input-error");
      }
    case "lastname":
      if (e.target.value.length >= 3) {
        inputLastName.classList.remove("input-error");
        inputLastName.classList.add("input-correct");
      } else {
        inputLastName.classList.add("input-error");
      }

    case "email":
      if (emailRegex.test(e.target.value)) {
        inputEmail.classList.remove("input-error");
        inputEmail.classList.add("input-correct");
      } else {
        inputEmail.classList.remove("input-correct");
        inputEmail.classList.add("input-error");
      }
    case "user":

    case "password":

    case "reset":
      break;
  }
};

inputs.forEach((input) => {
  input.onfocus = () => {
    input.classList.remove("input-error", "input-correct");
  };
});

inputs.forEach((input) => {
  input.addEventListener("blur", validation);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Sign in correctly");
});
