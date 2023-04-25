var form = document.getElementById("form");
var inputs = document.querySelectorAll("input");
var submitButton = document.getElementById("submitButton");

var inputName = document.getElementById("name");
var inputLastName = document.getElementById("lastname");
var inputId = document.getElementById("dni");
var inputDate = document.getElementById("date");
var inputAdress = document.getElementById("adress");
var inputLocation = document.getElementById("location");
var inputPostal = document.getElementById("postal");
var inputPhone = document.getElementById("phone");
var inputEmail = document.getElementById("email");
var inputPassword = document.getElementById("password");
var inputRepeat = document.getElementById("repeat");

var emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
var arrayError = [];

var validation = (e) => {
  switch (e.target.name) {
    case "name":
      if (e.target.value.length === 0 || e.target.value.length < 3) {
        inputName.classList.remove("input-correct");
        inputName.classList.add("input-error");
        arrayError[0] = "Name required";
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
      if (e.target.value.length === 0 || e.target.value.length < 3) {
        inputLastName.classList.remove("input-correct");
        inputLastName.classList.add("input-error");
        arrayError[1] = "Lastname required";
      } else {
        for (var i = 0; i < e.target.value.length; i++) {
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
      if (e.target.value.length === 0 || e.target.value.length < 7) {
        inputId.classList.remove("input-correct");
        inputId.classList.add("input-error");
        arrayError[2] = "DNI required";
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
        arrayError[3] = "Date required";
      } else {
        inputDate.classList.remove("input-error");
        inputDate.classList.add("input-correct");
      }
      break;

    case "phone":
      if (e.target.value.length === 0 || e.target.value.length < 10) {
        inputPhone.classList.add("input-error");
        arrayError[4] = "Phone required";
      } else {
        if (Number(e.target.value)) {
          inputPhone.classList.add("input-correct");
        } else {
          inputPhone.classList.add("input-error");
        }
      }
      break;

    case "adress":
      if (e.target.value.length === 0 || e.target.value.length < 5) {
        inputAdress.classList.remove("input-correct");
        inputAdress.classList.add("input-error");
        arrayError[5] = "Adress required";
      } else {
        var hasSpecialCharacter = false;
        var hasLetter = false;
        var hasNumber = false;
        var hasSpace = false;

        for (var i = 0; i < e.target.value.length; i++) {
          var charCode = e.target.value.charCodeAt(i);
          var value = e.target.value.trim();

          if (
            (charCode >= 65 && charCode <= 90) ||
            (charCode >= 97 && charCode <= 122)
          ) {
            hasLetter = true;
          }

          if (
            !(
              (charCode >= 65 && charCode <= 90) ||
              (charCode >= 97 && charCode <= 122)
            )
          ) {
            hasSpecialCharacter = true;
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

        if (!hasSpecialCharacter) {
          console.log("error");
        }

        if (hasSpecialCharacter && hasLetter && hasNumber && hasSpace) {
          inputAdress.classList.remove("input-error");
          inputAdress.classList.add("input-correct");
        } else {
          inputAdress.classList.remove("input-correct");
          inputAdress.classList.add("input-error");
        }
      }
      break;

    case "location":
      if (e.target.value.length === 0 || e.target.value.length < 3) {
        inputLocation.classList.remove("input-correct");
        inputLocation.classList.add("input-error");
        arrayError[6] = "Location required";
      } else {
        for (var i = 0; i < e.target.value.length; i++) {
          var codigo = e.target.value.charCodeAt(i);
          if (
            !(codigo > 47 && codigo < 58) &&
            !(codigo > 64 && codigo < 91) &&
            !(codigo > 96 && codigo < 123)
          ) {
            inputLocation.classList.remove("input-correct");
            inputLocation.classList.add("input-error");
          } else {
            inputLocation.classList.remove("input-error");
            inputLocation.classList.add("input-correct");
          }
        }
      }

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
        arrayError[7] = "Postal code required";
      }
      break;

    case "email":
      if (e.target.value.length === 0) {
        inputEmail.classList.add("input-error");
        arrayError[8] = "Email required";
      } else if (emailRegex.test(e.target.value)) {
        inputEmail.classList.remove("input-error");
        inputEmail.classList.add("input-correct");
      } else {
        inputEmail.classList.remove("input-correct");
        inputEmail.classList.add("input-error");
        arrayError[9] = "Please insert a email correct format";
      }
      break;

    case "password":
      var hasLetter = false;
      var hasNumber = false;

      if (e.target.value.length === 0) {
        inputPassword.classList.remove("input-correct");
        inputPassword.classList.add("input-error");
        arrayError[10] = "Password requerid";
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
          arrayError[11] =
            "password may have contain 8 characters (letters, numbers)";
        }
      }
      break;

    case "repeat":
      var hasLetter = false;
      var hasNumber = false;

      if (e.target.value.length === 0) {
        inputPassword.classList.remove("input-correct");
        inputPassword.classList.add("input-error");
        arrayError[12] = "Password requerid";
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
          arrayError[13] =
            "password may have contain 8 characters (letters, numbers)";
        }
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

submitButton.addEventListener('click', submitEvent)


function submitEvent(e) {
  e.preventDefault();
}
