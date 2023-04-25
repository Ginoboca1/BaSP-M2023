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

const fields = {
  name: false,
  lastname: false,
  dni: false,
  date: false,
  phone: false,
  address: false,
  location: false,
  postal: false,
  email: false,
  password: false,
  repeat: false,
};

var validation = (e) => {
  switch (e.target.name) {
    case "name":
      if (e.target.value.length === 0 || e.target.value.length < 3) {
        inputName.classList.remove("input-correct");
        inputName.classList.add("input-error");
        document
          .querySelector("#name-group .form-input-error")
          .classList.add("form-input-error-show");
        arrayError[0] = "Name required";
      } else {
        for (var i = 0; i < e.target.value.length; i++) {
          if (isNaN(parseInt(e.target.value[i]))) {
            inputName.classList.remove("input-incorrect");
            inputName.classList.add("input-correct");
            fields["name"] = true;
            document
              .querySelector("#name-group .form-input-error")
              .classList.remove("form-input-error-show");
            continue;
          } else {
            inputName.classList.remove("input-correct");
            inputName.classList.add("input-error");
            fields["name"] = false;
            document
              .querySelector("#name-group .form-input-error")
              .classList.add("form-input-error-show");
          }
        }
      }
      break;

    case "lastname":
      if (e.target.value.length === 0 || e.target.value.length < 3) {
        inputLastName.classList.remove("input-correct");
        inputLastName.classList.add("input-error");
        document
          .querySelector("#lastname-group .form-input-error")
          .classList.add("form-input-error-show");
        arrayError[1] = "Lastname required";
      } else {
        for (var i = 0; i < e.target.value.length; i++) {
          if (isNaN(parseInt(e.target.value[i]))) {
            inputLastName.classList.remove("input-error");
            inputLastName.classList.add("input-correct");
            fields["lastname"] = true;
            document
              .querySelector("#lastname-group .form-input-error")
              .classList.remove("form-input-error-show");
            continue;
          } else {
            inputLastName.classList.remove("input-correct");
            inputLastName.classList.add("input-error");
            fields["lastname"] = false;
            document
              .querySelector("#lastname-group .form-input-error")
              .classList.add("form-input-error-show");
            console.log("error");
          }
        }
      }
      break;

    case "dni":
      if (e.target.value.length === 0 || e.target.value.length < 7) {
        inputId.classList.remove("input-correct");
        inputId.classList.add("input-error");
        document
          .querySelector("#dni-group .form-input-error")
          .classList.add("form-input-error-show");
        arrayError[2] = "DNI required";
      } else {
        if (Number(e.target.value)) {
          inputId.classList.add("input-correct");
          fields["dni"] = true;
          document
            .querySelector("#dni-group .form-input-error")
            .classList.remove("form-input-error-show");
        } else {
          inputId.classList.add("input-error");
          fields["dni"] = false;
          document
            .querySelector("#dni-group .form-input-error")
            .classList.add("form-input-error-show");
        }
      }
      break;

    case "date":
      if (e.target.value.length <= 0) {
        inputDate.classList.add("input-error");
        fields["date"] = false;
        document
          .querySelector("#date-group .form-input-error")
          .classList.add("form-input-error-show");
        arrayError[3] = "Date required";
      } else {
        inputDate.classList.remove("input-error");
        inputDate.classList.add("input-correct");
        fields["date"] = true;
      }
      break;

    case "phone":
      if (e.target.value.length === 0 || e.target.value.length < 10) {
        inputPhone.classList.add("input-error");
        document
          .querySelector("#phone-group .form-input-error")
          .classList.add("form-input-error-show");
        arrayError[4] = "Phone required";
      } else {
        if (Number(e.target.value)) {
          inputPhone.classList.add("input-correct");
          fields["phone"] = true;
          document
            .querySelector("#phone-group .form-input-error")
            .classList.remove("form-input-error-show");
        } else {
          inputPhone.classList.add("input-error");
          fields["phone"] = false;
          document
            .querySelector("#phone-group .form-input-error")
            .classList.add("form-input-error-show");
        }
      }
      break;

    case "adress":
      if (e.target.value.length === 0 || e.target.value.length < 5) {
        inputAdress.classList.remove("input-correct");
        inputAdress.classList.add("input-error");
        document
          .querySelector("#adress-group .form-input-error")
          .classList.add("form-input-error-show");
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
          fields["address"] = true;
          document
            .querySelector("#address-group .form-input-error")
            .classList.remove("form-input-error-show");
        } else {
          inputAdress.classList.remove("input-correct");
          inputAdress.classList.add("input-error");
          fields["address"] = false;
          document
            .querySelector("#address-group .form-input-error")
            .classList.add("form-input-error-show");
        }
      }
      break;

    case "location":
      if (e.target.value.length === 0 || e.target.value.length < 3) {
        inputLocation.classList.remove("input-correct");
        inputLocation.classList.add("input-error");
        document
          .querySelector("#location-group .form-input-error")
          .classList.add("form-input-error-show");
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
            fields["location"] = false;
            document
              .querySelector("#location-group .form-input-error")
              .classList.add("form-input-error-show");
          } else {
            inputLocation.classList.remove("input-error");
            inputLocation.classList.add("input-correct");
            fields["location"] = true;
            document
              .querySelector("#location-group .form-input-error")
              .classList.remove("form-input-error-show");
          }
        }
      }

      break;

    case "postal":
      if (e.target.value.length >= 4 && e.target.value.length <= 5) {
        if (Number(e.target.value)) {
          inputPostal.classList.add("input-correct");
          fields["postal"] = true;
        } else {
          inputPostal.classList.add("input-error");
          fields["postal"] = false;
          document
            .querySelector("#postal-group .form-input-error")
            .classList.add("form-input-error-show");
        }
      } else {
        inputPostal.classList.add("input-error");
        fields["postal"] = false;
        arrayError[7] = "Postal code required";
      }
      break;

    case "email":
      if (e.target.value.length === 0) {
        inputEmail.classList.add("input-error");
        document
          .querySelector("#email-group .form-input-error")
          .classList.add("form-input-error-show");
        arrayError[8] = "Email required";
      } else if (emailRegex.test(e.target.value)) {
        inputEmail.classList.remove("input-error");
        inputEmail.classList.add("input-correct");
        fields["email"] = true;
        document
          .querySelector("#email-group .form-input-error")
          .classList.remove("form-input-error-show");
      } else {
        inputEmail.classList.remove("input-correct");
        inputEmail.classList.add("input-error");
        fields["email"] = false;
        document
          .querySelector("#email-group .form-input-error")
          .classList.add("form-input-error-show");
        arrayError[9] = "Please insert a email correct format";
      }
      break;

    case "password":
      var hasLetter = false;
      var hasNumber = false;

      if (e.target.value.length === 0) {
        inputPassword.classList.remove("input-correct");
        inputPassword.classList.add("input-error");
        document
          .querySelector("#password-group .form-input-error")
          .classList.add("form-input-error-show");
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
          fields["password"] = true;
          document
            .querySelector("#password-group .form-input-error")
            .classList.remove("form-input-error-show");
        } else {
          inputPassword.classList.remove("input-correct");
          inputPassword.classList.add("input-error");
          fields["password"] = false;
          document
            .querySelector("#password-group .form-input-error")
            .classList.add("form-input-error-show");
          arrayError[11] =
            "password may have contain 8 characters (letters, numbers)";
        }
      }
      break;

    case "repeat":
      var hasLetter = false;
      var hasNumber = false;

      if (e.target.value.length === 0) {
        inputRepeat.classList.remove("input-correct");
        inputRepeat.classList.add("input-error");
        document
          .querySelector("#repeat-group .form-input-error")
          .classList.add("form-input-error-show");
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
          inputRepeat.classList.remove("input-error");
          inputRepeat.classList.add("input-correct");
          fields["repeat"] = true;
          document
            .querySelector("#repeat-group .form-input-error")
            .classList.remove("form-input-error-show");
        } else {
          inputRepeat.classList.remove("input-correct");
          inputRepeat.classList.add("input-error");
          fields["repeat"] = false;
          document
            .querySelector("#repeat-group .form-input-error")
            .classList.add("form-input-error-show");
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

submitButton.addEventListener("click", submitEvent);

function submitEvent(e) {
  e.preventDefault();
  if (
    fields.name &&
    fields.lastname &&
    fields.dni &&
    fields.date &&
    fields.phone &&
    fields.address &&
    fields.location &&
    fields.postal &&
    fields.email &&
    fields.password &&
    fields.repeat
  ) {
    alert(
      "Name: " +
        inputName.value +
        "\n" +
        "Lastname: " +
        inputLastName.value +
        "\n" +
        "DNI: " +
        inputId.value +
        "\n" +
        "Date: " +
        inputDate.value +
        "\n" +
        "Phone: " +
        inputPhone.value +
        "\n" +
        "Address: " +
        inputAdress.value +
        "\n" +
        "Location: " +
        inputLocation.value +
        "\n" +
        "Postal: " +
        inputPassword.value +
        "\n" +
        "Email: " +
        inputEmail.value +
        "\n" +
        "Password: " +
        inputPassword.value +
        "\n" +
        "Password repeat: " +
        inputRepeat.value
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
    }, 1000);
  }
}
