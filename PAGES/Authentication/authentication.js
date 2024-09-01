function getUserInputs() {
    // Get user input values
    const studentEmailInput = document.getElementById("studentEmail");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("ConfirmPassword");
  
    const userStudentEmail = studentEmailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
  
    let isValid = true;  // Flag to check if all inputs are valid
  
    // Validate Student Email
    if (!userStudentEmail) {
      setError(studentEmailInput, "Student Email is required.");
      isValid = false;
    } else if (!validateEmail(userStudentEmail)) {
      setError(studentEmailInput, "Please enter a valid email address.");
      isValid = false;
    } else if (isEmailRegistered(userStudentEmail)) {
      setError(studentEmailInput, "This email is already registered. Please use a different email.");
      isValid = false;
    }else {
      clearError(studentEmailInput);
    }
  
    // Validate Password
    if (!password) {
      setError(passwordInput, "Password is required.");
      isValid = false;
    } else {
      clearError(passwordInput);
    }
  
    // Validate Confirm Password
    if (!confirmPassword) {
      setError(confirmPasswordInput, "Confirm Password is required.");
      isValid = false;
    } else if (password !== confirmPassword) {
      setError(confirmPasswordInput, "Passwords do not match.");
      isValid = false;
    } else {
      clearError(confirmPasswordInput);
    }
  
    // If all inputs are valid, save to localStorage and redirect
    if (isValid) {
      localStorage.setItem('userStudentEmail', userStudentEmail);
      localStorage.setItem('userPassword', password);
      window.location.href = "../createpp.html";  // Replace with your actual URL
    }
  }
  
  // Function to validate email format
  function validateEmail(email) {
    const emailPattern = /^[0-9]{9}@swave\.smu\.ac\.za$/;
    return emailPattern.test(email);
  }
  
  // Function to check if the email is already registered
function isEmailRegistered(email) {
  // This is a simple example using localStorage.
  // Replace with your actual logic if you are using a database or other storage method.
  const registeredEmail = localStorage.getItem('userStudentEmail');
  return registeredEmail === email;
}

  // Function to set error styling and message
  function setError(inputElement, message) {
    inputElement.classList.add('error');
    inputElement.classList.remove('normal');
    alert(message);  // Optional: Alert message or you can use a tooltip/message below the input
  }
  
  // Function to clear error styling
  function clearError(inputElement) {
    inputElement.classList.remove('error');
    inputElement.classList.add('normal');
  }
  
  // Login function to check user credentials
  function loginUser() {
    const logInUserEmailInput = document.getElementById("UserLogInEmail");
    const logInPasswordInput = document.getElementById("UserLogINPassword");
  
    const logInUserEmail = logInUserEmailInput.value;
    const logInPassword = logInPasswordInput.value;
  
    const storedUserEmail = localStorage.getItem('userStudentEmail');
    const storedPassword = localStorage.getItem('userPassword');
  
    if (!logInUserEmail || !logInPassword) {
      alert("Please enter both email and password.");
    } else if (logInUserEmail === storedUserEmail && logInPassword === storedPassword) {
      alert("Welcome back, Comrade!");
  
      // window.location.href = "../home.html";  // Navigate to home
      window.location.href = "../createpp.html";  // Navigate to createpp
    } else {
      alert("Incorrect email or password. Please try again.");
    }
  }
  