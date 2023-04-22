var inputUser = document.getElementById("user");
var inputPassword = document.getElementById("password");
var submitButton = document.getElementById("submitButton");

inputUser.onblur = () => {
  if (inputUser.value !== 'kaka') {
    inputUser.classList.add('input-error')
  } else {
    inputUser.classList.remove('input-error');
  }
};

inputUser.onfocus = () => {
  
};

submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Submiting...");
});
