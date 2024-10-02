// script.js

// Function to open a modal
function openModal(plan) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    modalContent.innerText = `You have selected the ${plan} plan.`;
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Event listeners for pricing buttons
document.querySelectorAll('.pricing-plan button').forEach(button => {
    button.addEventListener('click', function() {
        const plan = this.parentElement.querySelector('h3').innerText;
        openModal(plan);
    });
});

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
};

// Close modal when pressing the escape key
window.onkeydown = function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
};