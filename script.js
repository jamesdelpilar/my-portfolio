const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const form = document.getElementById("contact-form");
const submitButton = document.getElementById("submit-button");

// Form validation to check if name and message fields are blank
form.addEventListener("submit", (event) => {
    let isValid = true;
    submitButton.disabled = false;

    if (nameInput.value.trim() === "") {
      alert("Name is blank.");
      isValid = false;
      submitButton.disabled = true;
    }

    if (messageInput.value.trim() === "") {
      alert("Message is blank.");
      isValid = false;
      submitButton.disabled = true;
    }

    if (emailInput.value.trim() === "") {
      alert("Email is blank.");
      isValid = false;
      submitButton.disabled = true;
    }

    if (!isValid) {
      event.preventDefault();
      submitButton.disabled = false;
    }
  });