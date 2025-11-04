// Contact Form Handler using Web3Forms (Free service)
// Get your free access key from https://web3forms.com/
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const msgSubmit = document.getElementById('msgSubmit');

  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();

      // Show loading message
      msgSubmit.innerHTML = 'Sending...';
      msgSubmit.classList.remove('hidden', 'text-danger', 'text-success');
      msgSubmit.classList.add('text-info');

      try {
        const formData = new FormData(contactForm);

        // Using Web3Forms service (completely free, no subscription needed)
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });

        const data = await response.json();

        if (data.success) {
          msgSubmit.innerHTML = 'Message sent successfully! I will get back to you soon.';
          msgSubmit.classList.remove('text-info', 'text-danger');
          msgSubmit.classList.add('text-success');
          contactForm.reset();
        } else {
          throw new Error(data.message || 'Failed to send message');
        }
      } catch (error) {
        console.error('Error:', error);
        msgSubmit.innerHTML = 'Failed to send message. Please email me directly at <a href="mailto:damikaanupama@gmail.com">damikaanupama@gmail.com</a>';
        msgSubmit.classList.remove('text-info', 'text-success');
        msgSubmit.classList.add('text-danger');
      }

      // Hide message after 5 seconds
      setTimeout(() => {
        msgSubmit.classList.add('hidden');
      }, 5000);
    });
  }
});
