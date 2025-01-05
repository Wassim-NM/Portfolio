'use strict';

function progressBarAndCountNumber () {
    const progress = document.querySelectorAll('.progress');
    let count = 0;
    // You must put the maximum number in the MAX variable.
    let MAX = 100;

    let run = setInterval(() => {
        count++;
        progress.forEach(element => {
            if (count <= element.dataset.progress) {
                element.parentElement.style.background = `conic-gradient(#007BFF ${count}%, #212428 0)`;
                element.firstElementChild.textContent = `${count}%`;
            };
            if (count == MAX) {
                clearInterval(run);
            };
        });
    }, 20);
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', () => {
    progressBarAndCountNumber();
});

// Select elements without #
const contactForm = document.getElementById('contact-form');
const submitBtn = document.querySelector('.submit-btn');
const nameInput = document.getElementById('user_name');
const emailInput = document.getElementById('user_email');
const messageInput = document.getElementById('message');

// EmailJS credentials
const publickey = '9TsraCudZ5T_0dert';
const serviceID = 'service_vatb7so';
const templateID = 'template_rogi3hj';

// Initialize EmailJS with public key
emailjs.init(publickey);

// Add Submit Event to form
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Change button text
    submitBtn.innerHTML = 'Sending...';
    // Get all input field values
    const inputFields = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value,
    };
    // Send the email
    emailjs.send(serviceID, templateID, inputFields)
        .then((response) => {
            // Change button text
            submitBtn.innerHTML = 'Sent';
            submitBtn.disabled = true;
            // Reset form
            contactForm.reset();
            // Show success message
            alert('Your message has been sent successfully');
        }, (error) => {
            // Change button text
            submitBtn.innerHTML = 'Failed';
            // Show error message
            alert('Failed to send message. Please try again');
        });
});