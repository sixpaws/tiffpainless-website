// ===== Mobile Nav Toggle =====
document.addEventListener('DOMContentLoaded', function () {
    // Set current year in footer
    var yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Mobile navigation
    var navToggle = document.querySelector('.nav-toggle');
    var mainNav = document.querySelector('.main-nav');
    if (navToggle && mainNav) {
        navToggle.addEventListener('click', function () {
            var isOpen = mainNav.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', isOpen);
        });
    }

    // FAQ Accordion
    var faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(function (q) {
        q.addEventListener('click', function () {
            var answer = q.nextElementSibling;
            var isOpen = q.getAttribute('aria-expanded') === 'true';
            // Close all
            faqQuestions.forEach(function (otherQ) {
                otherQ.setAttribute('aria-expanded', 'false');
                otherQ.nextElementSibling.classList.remove('open');
            });
            // Open clicked if it was closed
            if (!isOpen) {
                q.setAttribute('aria-expanded', 'true');
                answer.classList.add('open');
            }
        });
    });

    // Contact form — show success message on submit
    var form = document.getElementById('appointment-form');
    var successMsg = document.getElementById('form-success');
    if (form && successMsg) {
        form.addEventListener('submit', function (e) {
            var action = form.getAttribute('action');
            if (!action || action === 'YOUR_FORM_ENDPOINT_HERE') {
                e.preventDefault();
                form.style.display = 'none';
                successMsg.style.display = 'block';
            }
        });
    }
});
