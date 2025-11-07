// Submission form refs
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const form = document.getElementById("contact-form");
const submitButton = document.getElementById("submit-button");

// Project Gallery refs
const project1_button = document.getElementById('project1_button');
const project1_text = document.getElementById('project1-description');

// Form validation to check if name, message and email fields are blank
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

// Project show/hide gallery
    project1_button.addEventListener('click', () => {
      const isHidden = project1_text.classList.contains('hidden');
      project1_text.classList.toggle('hidden');
      project1_button.textContent = isHidden ? 'Hide Details' : 'Show Details';
    });