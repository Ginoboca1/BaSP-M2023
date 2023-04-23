const form = document.getElementById("form");
const inputs = document.querySelectorAll("input");

const inputName = document.getElementById("name");
const inputLastName = document.getElementById("lastname");
const inputId = document.getElementById("dni");
const inputDate = document.getElementById("date");
const inputAdress = document.getElementById("adress");
const inputLocation = document.getElementById("location");
const inputPostal = document.getElementById("postal");
const inputPhone = document.getElementById("phone");
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const inputRepeat = document.getElementById("repeat");

const emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

const validation = (e) => {
  switch (e.target.name) {
    case "name":
      if (e.target.value.length < 3) {
        inputName.classList.remove("input-correct");
        inputName.classList.add("input-error");
      } else {
        for (var i = 0; i < e.target.value.length; i++) {
          if (isNaN(parseInt(e.target.value[i]))) {
            inputName.classList.remove("input-incorrect");
            inputName.classList.add("input-correct");
            continue;
          } else {
            inputName.classList.remove("input-correct");
            inputName.classList.add("input-error");
          }
        }
      }
      break;

    case "lastname":
      if (e.target.value.length < 3) {
        inputLastName.classList.remove("input-correct");
        inputLastName.classList.add("input-error");
      } else {
        for (let i = 0; i < e.target.value.length; i++) {
          if (isNaN(parseInt(e.target.value[i]))) {
            inputLastName.classList.remove("input-error");
            inputLastName.classList.add("input-correct");
            console.log("correct");
            continue;
          } else {
            inputLastName.classList.remove("input-correct");
            inputLastName.classList.add("input-error");
            console.log("error");
          }
        }
      }
      break;

    case "dni":
      if (e.target.value.length < 7) {
        inputId.classList.add("input-error");
      } else {
        if (Number(e.target.value)) {
          inputId.classList.add("input-correct");
        } else {
          inputId.classList.add("input-error");
        }
      }
      break;

    case "date":
      if (e.target.value.length <= 0) {
        inputDate.classList.add("input-error");
      } else {
        inputDate.classList.remove("input-error");
        inputDate.classList.add("input-correct");
      }
      break;

    case "phone":
      if (e.target.value.length < 10) {
        inputPhone.classList.add("input-error");
      } else {
        if (Number(e.target.value)) {
          inputPhone.classList.add("input-correct");
        } else {
          inputPhone.classList.add("input-error");
        }
      }
      break;

    case "adress":
      if (e.target.value.length < 5) {
        inputAdress.classList.remove("input-correct");
        inputAdress.classList.add("input-error");
      } else {
        let hasLetter = false;
        let hasNumber = false;
        let hasSpace = false;

        for (let i = 0; i < e.target.value.length; i++) {
          let charCode = e.target.value.charCodeAt(i);
          let value = e.target.value.trim();

          if (
            !hasLetter &&
            ((charCode >= 65 && charCode <= 90) ||
              (charCode >= 97 && charCode <= 122))
          ) {
            hasLetter = true;
          }

          if (!hasNumber && !isNaN(e.target.value[i])) {
            hasNumber = true;
          }

          if (
            value.indexOf(" ") == -1 ||
            value.indexOf(" ") === 0 ||
            value.indexOf(" ") === value.length - 1
          ) {
            hasSpace = false;
          } else {
            hasSpace = true;
          }
        }

        if (hasLetter && hasNumber && hasSpace) {
          inputAdress.classList.remove("input-error");
          inputAdress.classList.add("input-correct");
        } else {
          inputAdress.classList.remove("input-correct");
          inputAdress.classList.add("input-error");
        }
      }
      break;

    case "location":
      break;

    case "postal":
      if (e.target.value.length >= 4 && e.target.value.length <= 5) {
        if (Number(e.target.value)) {
          inputPostal.classList.add("input-correct");
        } else {
          inputPostal.classList.add("input-error");
        }
      } else {
        inputPostal.classList.add("input-error");
      }
      break;

    case "email":
      if (emailRegex.test(e.target.value)) {
        inputEmail.classList.remove("input-error");
        inputEmail.classList.add("input-correct");
      } else {
        inputEmail.classList.remove("input-correct");
        inputEmail.classList.add("input-error");
      }
      break;

    case "user":
      break;

    case "password":
      let hasLetter = false;
      let hasNumber = false;

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

    case "repeat":
      let hasLetterOne = false;
      let hasNumberOne = false;

      for (let i = 0; i < e.target.value.length; i++) {
        let charCode = e.target.value.charCodeAt(i);
        if (charCode >= 48 && charCode <= 57) {
          hasNumberOne = true;
        } else if (
          (charCode >= 65 && charCode <= 90) ||
          (charCode >= 97 && charCode <= 122)
        ) {
          hasLetterOne = true;
        }
      }
      if (e.target.value.length >= 8 && hasLetterOne && hasNumberOne) {
        inputRepeat.classList.remove("input-error");
        inputRepeat.classList.add("input-correct");
      } else {
        inputRepeat.classList.remove("input-correct");
        inputRepeat.classList.add("input-error");
      }
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
