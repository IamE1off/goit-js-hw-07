"use strict";
const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); 
  const emailInput = this.elements.email;
  const passwordInput = this.elements.password;
  if (!emailInput.value.trim() || !passwordInput.value.trim()) {
    alert("Всі поля повинні бути заповнені!");
    return;
  }
  const formData = {
    email: emailInput.value.trim(),
    password: passwordInput.value.trim(),
  };
  console.log(formData);
  this.reset();
});
