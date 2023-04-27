const inputs = document.querySelectorAll(".input");
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const submitButton = document.getElementById("submitButton");
const errorAlert = document.getElementsByClassName("error-message");
const arrayError = [];

const emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

const fields = {
  email: false,
  password: false,
};

const validation = (e) => {
  switch (e.target.name) {
    case "email":
      if (e.target.value == null || e.target.value == "") {
        inputEmail.classList.add("input-error");
        document
          .querySelector("#email-group .form-input-error")
          .classList.add("form-input-error-show");
        arrayError[0] = "Email required";
      } else if (!emailRegex.test(e.target.value)) {
        inputEmail.classList.remove("input-correct");
        inputEmail.classList.add("input-error");
        fields["email"] = false;
        arrayError[1] = "Please insert a email correct format";
        document
          .querySelector("#email-group .form-input-error")
          .classList.add("form-input-error-show");
      } else {
        inputEmail.classList.remove("input-error");
        inputEmail.classList.add("input-correct");
        fields["email"] = true;
        document
          .querySelector("#email-group .form-input-error")
          .classList.remove("form-input-error-show");
      }
      break;

    case "password":
      let hasLetter = false;
      let hasNumber = false;

      if (e.target.value.length === 0) {
        inputPassword.classList.remove("input-correct");
        inputPassword.classList.add("input-error");
        document
          .querySelector("#password-group .form-input-error")
          .classList.add("form-input-error-show");
        arrayError[2] = "Password requerid";
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
          fields["password"] = true;
        } else {
          inputPassword.classList.remove("input-correct");
          inputPassword.classList.add("input-error");
          fields["password"] = false;
          document
            .querySelector("#password-group .form-input-error")
            .classList.add("form-input-error-show");
          arrayError[3] =
            "password may have contain 8 characters (letters, numbers)";
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
  let messageError = "";
  e.preventDefault();
  if (fields.email && fields.password) {
    alert(
      "Email: " + inputEmail.value + "\n" + "Password: " + inputPassword.value
    );
  } else {
    inputs.forEach((input) => {
      input.classList.add("input-error");
    });
    document.getElementById("message-form").classList.add("message-form-show");
    setTimeout(() => {
      inputs.forEach((input) => {
        input.classList.remove("input-error");
      });
      document
        .getElementById("message-form")
        .classList.remove("message-form-show");
    }, 2000);

    arrayError.forEach((error) => {
      if (error.length !== 0) {
        messageError += error + "\n";
      }
      alert(messageError);
    });
  }
}
