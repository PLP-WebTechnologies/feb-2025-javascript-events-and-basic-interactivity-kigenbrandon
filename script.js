// script.js

document.addEventListener("DOMContentLoaded", () => {
    const welcomeText = document.getElementById("welcome-text");
    const changeTextBtn = document.getElementById("change-text-btn");
    const toggleBoxBtn = document.getElementById("toggle-box-btn");
    const dynamicBox = document.getElementById("dynamic-box");
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("form-message");
    const togglePassword = document.getElementById("togglePassword");
    const passwordField = document.getElementById("password");
  
    // Change welcome text on button click
    changeTextBtn.addEventListener("click", () => {
      welcomeText.textContent = "Thanks for visiting FlexSite!";
    });
  
    // Add/remove a box dynamically
    toggleBoxBtn.addEventListener("click", () => {
      if (dynamicBox.innerHTML === "") {
        const newBox = document.createElement("div");
        newBox.textContent = "I’m a dynamic box!";
        newBox.style.padding = "1rem";
        newBox.style.backgroundColor = "#f0c674";
        newBox.style.borderRadius = "8px";
        newBox.style.textAlign = "center";
        dynamicBox.appendChild(newBox);
      } else {
        dynamicBox.innerHTML = "";
      }
    });
  
    // Toggle password visibility
    togglePassword.addEventListener("change", () => {
      passwordField.type = togglePassword.checked ? "text" : "password";
    });
  
    // Form validation on submit
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value.trim();
      const email = document.getElementById("email").value.trim();
  
      if (!username || !email) {
        formMessage.textContent = "Please fill in all required fields.";
      } else {
        formMessage.style.color = "green";
        formMessage.textContent = "Form submitted successfully!";
        contactForm.reset();
      }
    });
  });
  