// script.js

document.getElementById("enhancedForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission
  let isValid = true;

  // Clear previous error messages
  document.querySelectorAll(".error").forEach((error) => {
    error.textContent = "";
  });

  // Validate Name
  const name = document.getElementById("name").value.trim();
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    isValid = false;
  }

  // Validate Email
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    isValid = false;
  }

  // Validate Message
  const message = document.getElementById("message").value.trim();
  if (message === "") {
    document.getElementById("messageError").textContent = "Message is required.";
    isValid = false;
  }

  // Submit the form if valid
  if (isValid) {
    alert("Form submitted successfully!");
    this.reset(); // Reset the form fields
  }
});
