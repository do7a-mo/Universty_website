const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password"); // Corrected variable name
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Validate email input
  if (validateEmail(emailInput.value)) {
    // Validate password input (enhanced validation)
    if (validatePassword(passwordInput.value)) {
      // Display success message (optional, consider server-side validation)
      message.classList.remove("hidden");
      message.textContent = "Email and password are valid (client-side)"; // Informative message
    } else {
      // Display error message for password
      message.classList.remove("hidden");
      message.textContent = "Password is invalid. Please use a strong password.";
    }
  } else {
    // Display error message for email
    message.classList.remove("hidden");
    message.textContent = "Email is invalid.";
  }
});

//function validateEmail(email) {
  //const re = /^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+\.+[a-zA-Z]{2,}))$/;
  //return re.test(String(email).toLowerCase());
//}

function validateEmail(email) {
  var inputText = document.form1.text1.value;
  var mailformat = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.com$/);
  if(inputText.match(mailformat) && inputText === email) {
    
    alert("Successful login!");
  } else {
    alert("Invalid email address or login!");
  }
}

function validatePassword(password) {
  // Enhanced password validation (consider adjusting requirements based on your application)
  const minLength = 8; // Minimum length requirement
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password);

  return (
    password.length >= minLength &&
    hasUppercase &&
    hasLowercase &&
    hasNumber &&
    hasSpecialChar
  );
}
