const form = document.getElementById("form");
const inputs = document.querySelectorAll("input");

const inputName = document.getElementById("name");
const inputLastName = document.getElementById("lastname");
const inputEmail = document.getElementById("email");
const inputUser = document.getElementById("user");
const inputPassword = document.getElementById("password");
const inputReset = document.getElementById("reset");
const inputId = document.getElementById("dni");
const inputAdress = document.getElementById("adress");
const inputLocation = document.getElementById("location");
const inputPostal = document.getElementById("postal");
const inputPhone = document.getElementById("phone");

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

    case "date":

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

    case "adress":
    /* 
      let hasLetters = false;
      let hasNumbers = false;
      let hasSpaces = false;

      if(e.target.value.length < 5){
        inputAdress.classList.add('input-error');
      } else{
        if(!Number(e.target.value)){
          inputAdress.classList.add('input-error');
        } else {
          hasNumbers = true;
          for (let i = 0; i < e.target.value.length; i++) {
            let char = e.target.value[i];
            if((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')){
              console.log('Tiene letras!');
            } else{
              console.log('No tiene letras');
            }
          }
        }
      }
      */

    case "location":

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
