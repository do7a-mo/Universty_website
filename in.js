function validateForm() {
    // Get references to email and password fields
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
  
    // Email validation (basic check)
    const email = emailInput.value.trim();
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address.");
      emailInput.focus(); // Set focus on the email field for correction
      return false; // Prevent form submission
    }
  
    // Password validation (minimum length example)
    const password = passwordInput.value.trim();
    const minPasswordLength = 8; // Set your desired minimum password length
    if (password.length < minPasswordLength) {
      alert("Password must be at least " + minPasswordLength + " characters long.");
      passwordInput.focus();
      return false;
    }
  
    // If validation passes, submit the form (optional)
    // You might want to handle form submission differently (e.g., using AJAX)
    // document.getElementById("loginForm").submit();
  
    // Display success message (optional)
    // You can uncomment this and customize the message
    // document.getElementById("message").classList.remove("hidden");
    return true; // Allow form submission if validation succeeds
  }
  
  // Attach the validateForm function to the submit event of the login form
  const loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", validateForm);
  