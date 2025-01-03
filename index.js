const contactForm = document.getElementById('contact-form');
const submitBtn = document.querySelector('.submit-btn');
const nameInput = document.getElementById('user_name');
const emailInput = document.getElementById('user_email');
const messageInput = document.getElementById('message');

// Get needed data from email JS
const publickey = '9TsraCudZ5T_0dert';
const serviceID = 'service_vatb7so';
const templateID = 'template_rogi3hj';

// initialize emailJS with public key
emailjs.init(publickey);

//Add Submit Event to form
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Change button text
    submitBtn.innerHTML = 'Sending...';
    // Get all inputs field values
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

'use strict';

function progressBarAndCountNumber() {
    const progressElements = document.querySelectorAll('.progress');
    let count = 0;

    // Define the maximum percentage value for progress
    const MAX_PROGRESS = 100;

    // Use setInterval to increment and update progress
    const interval = setInterval(() => {
        count++;

        progressElements.forEach(element => {
            const targetProgress = parseInt(element.dataset.progress, 100); // Convert data-progress to an integer

            // Update the progress only if it's within the target range
            if (count <= targetProgress) {
                element.parentElement.style.background = `conic-gradient(#f9004d ${count}%, #212428 ${count}%)`;
                element.querySelector('.progress-number').textContent = `${count}%`;
            }
        });

        // Stop the interval once the maximum value is reached
        if (count === MAX_PROGRESS) {
            clearInterval(interval);
        }
    }, 20); // Delay in milliseconds
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', () => {
    progressBarAndCountNumber();
});

