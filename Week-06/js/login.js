let inputs = document.querySelectorAll("input");
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const submitButton = document.getElementById("submitButton");

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
      console.log("password");
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

submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Submiting...");
});
