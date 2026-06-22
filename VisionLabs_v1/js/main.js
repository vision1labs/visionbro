document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile Menu Toggle
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.padding = '0.5rem 0';
            navbar.style.background = 'rgba(5, 5, 5, 0.95)';
        } else {
            navbar.style.padding = '1rem 0';
            navbar.style.background = 'rgba(5, 5, 5, 0.8)';
        }
    });

    // --- NEW: Copy Email to Clipboard ---
    const copyEmailBtns = document.querySelectorAll('.copy-email');
    const emailAddress = 'visionlabs.tech@gmail.com';

    copyEmailBtns.forEach(btn => {
        btn.addEventListener('click', async () => {
            try {
                // Copy to clipboard
                await navigator.clipboard.writeText(emailAddress);
                
                // Visual feedback (Changes text to "Copied!" temporarily)
                const originalText = btn.innerText;
                btn.innerText = 'Copied!';
                btn.style.color = 'var(--accent)';
                btn.style.borderColor = 'var(--accent)';
                
                // Revert back after 2 seconds
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.color = '';
                    btn.style.borderColor = '';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy email: ', err);
                // Fallback for older browsers or non-HTTPS environments
                const textArea = document.createElement('textarea');
                textArea.value = emailAddress;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                alert('Email copied to clipboard: ' + emailAddress);
            }
        });
    });
        // --- Phone Dropdown Toggle ---
    const phoneToggle = document.getElementById('phoneToggle');
    const phoneNumbers = document.getElementById('phoneNumbers');

    if (phoneToggle && phoneNumbers) {
        phoneToggle.addEventListener('click', () => {
            phoneToggle.classList.toggle('active');
            phoneNumbers.classList.toggle('active');
        });
    }
        // --- Copy Phone Numbers to Clipboard ---
    const copyPhoneBtns = document.querySelectorAll('.copy-phone');
    
    copyPhoneBtns.forEach(btn => {
        btn.addEventListener('click', async (e) => {
            e.preventDefault();
            const phoneNumber = btn.innerText.trim();
            
            try {
                await navigator.clipboard.writeText(phoneNumber);
                
                // Visual feedback
                const originalText = btn.innerText;
                btn.innerText = 'Copied!';
                btn.style.color = 'var(--accent)';
                btn.style.borderColor = 'var(--accent)';
                
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.color = '';
                    btn.style.borderColor = '';
                }, 1500);
            } catch (err) {
                console.error('Failed to copy phone number: ', err);
            }
        });
    });
        // --- FAQ Accordion Toggle ---
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            
            // Optional: Close other open FAQs to keep it clean
            const activeItem = document.querySelector('.faq-item.active');
            if (activeItem && activeItem !== faqItem) {
                activeItem.classList.remove('active');
            }
            
            // Toggle the clicked FAQ
            faqItem.classList.toggle('active');
        });
    });
});