const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();

      // Clear previous error messages
      document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

      let isValid = true;

      // Name validation
      const name = document.getElementById('name').value.trim();
      if (name === '') {
        document.getElementById('nameError').textContent = 'Please enter your name.';
        isValid = false;
      }

      // Email validation
      const email = document.getElementById('email').value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        isValid = false;
      }

      // Phone validation
      const phone = document.getElementById('phone').value.trim();
      const phonePattern = /^[0-9]{10,15}$/;
      if (!phonePattern.test(phone)) {
        document.getElementById('phoneError').textContent = 'Please enter a valid phone number (10-15 digits).';
        isValid = false;
      }

      // Subject validation
      const subject = document.getElementById('subject').value.trim();
      if (subject === '') {
        document.getElementById('subjectError').textContent = 'Please enter a subject.';
        isValid = false;
      }

      // Message validation
      const message = document.getElementById('message').value.trim();
      if (message === '') {
        document.getElementById('messageError').textContent = 'Please enter your message.';
        isValid = false;
      }

      if (isValid) {
        alert('Thank you! Your message has been sent.');
        contactForm.reset();
      }
    });