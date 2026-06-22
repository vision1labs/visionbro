document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const submitBtn = document.getElementById('submitBtn');
    
    // Modal Elements
    const successModal = document.getElementById('successModal');
    const closeModalBtn = document.getElementById('closeModal');

    // Close Modal Logic
    closeModalBtn.addEventListener('click', () => successModal.classList.remove('active'));
    successModal.addEventListener('click', (e) => {
        if (e.target === successModal) successModal.classList.remove('active');
    });

    // Email Validation Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    emailInput.addEventListener('input', () => {
        if (emailRegex.test(emailInput.value)) {
            emailInput.classList.remove('input-error');
            emailError.style.display = 'none';
        }
    });

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // 1. Validate Email
        if (!emailRegex.test(emailInput.value)) {
            emailInput.classList.add('input-error');
            emailError.style.display = 'block';
            emailInput.focus();
            return;
        }

        // 2. UI Loading State
        submitBtn.innerText = 'Sending...';
        submitBtn.disabled = true;

        // 3. Prepare Data
        const templateParams = {
            name: document.getElementById('name').value,
            email: emailInput.value,
            project: document.getElementById('project').value,
            message: document.getElementById('message').value,
            customer_name: document.getElementById('name').value,
            project_idea: document.getElementById('project').value || document.getElementById('message').value,
            business_email: 'visionlabs.tech@gmail.com',
            website_url: window.location.origin 
        };

        try {
            // 4. Send Emails
            await emailjs.send("service_ed5ldf7", "template_wx5az47", templateParams);
            await emailjs.send("service_ed5ldf7", "template_fwy6ijf", templateParams);

            // 5. Show Success Popup & Reset Form
            successModal.classList.add('active');
            form.reset();
            submitBtn.innerText = 'Send Inquiry';
            submitBtn.disabled = false;

        } catch (error) {
            console.error('Email sending failed:', error);
            submitBtn.innerText = 'Failed. Try Again.';
            submitBtn.style.background = '#ff4d4d'; 
            
            setTimeout(() => {
                submitBtn.innerText = 'Send Inquiry';
                submitBtn.style.background = '';
                submitBtn.disabled = false;
            }, 3000);
        }
    });
});