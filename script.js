document.addEventListener('DOMContentLoaded', function() {
    // Gestion du formulaire de contact
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = this.querySelector('input[name='name']').value;
        const email = this.querySelector('input[name='email']').value;
        const message = this.querySelector('textarea[name='message']').value;

        alert('Merci ' + name + ' ! Votre message a été envoyé à ' + email + '.\nNous vous répondrons bientôt.');

        this.reset();
    });
});
