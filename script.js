// ==========================================================
// Portfolio Interactive Scripts
// ==========================================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme Toggle Functionality
    const themeBtn = document.getElementById('theme-btn');
    const body = document.body;

    // Check saved theme or system preference
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'light') {
        body.classList.add('light-theme');
        if (themeBtn) themeBtn.textContent = 'Switch Theme ☀️';
    }

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            body.classList.toggle('light-theme');
            const isLight = body.classList.contains('light-theme');
            themeBtn.textContent = isLight ? 'Switch Theme ☀️' : 'Switch Theme 🌙';
            localStorage.setItem('portfolio-theme', isLight ? 'light' : 'dark');
        });
    }

    // 2. Interactive Greeting Button
    const greetBtn = document.getElementById('greet-btn');
    const greetingBox = document.getElementById('greeting-box');

    if (greetBtn && greetingBox) {
        greetBtn.addEventListener('click', () => {
            const currentHour = new Date().getHours();
            let greetingTime = 'Hello';

            if (currentHour < 12) {
                greetingTime = 'Good Morning';
            } else if (currentHour < 18) {
                greetingTime = 'Good Afternoon';
            } else {
                greetingTime = 'Good Evening';
            }

            greetingBox.innerHTML = `
                <strong>${greetingTime}! 👋</strong> Thank you for visiting Vivek Choubey's portfolio. 
                Feel free to explore my skills, projects, and connect with me below!
            `;
            greetingBox.classList.remove('hidden');
        });
    }

    // 3. Contact Form Submission Handling
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameInput = document.getElementById('contact-name');
            const name = nameInput ? nameInput.value.trim() : 'Friend';

            if (formFeedback) {
                formFeedback.textContent = `Thanks, ${name}! Your message has been sent successfully.`;
                formFeedback.style.color = 'var(--text-primary)';
            }

            contactForm.reset();

            setTimeout(() => {
                if (formFeedback) formFeedback.textContent = '';
            }, 5000);
        });
    }
});
