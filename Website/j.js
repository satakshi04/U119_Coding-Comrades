document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userForm');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting

        // Basic validation
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const email = document.getElementById('email').value.trim();
        const address = document.getElementById('address').value.trim();
        const cardNumber = document.getElementById('cardNumber').value.trim();
        const expiry = document.getElementById('expiry').value;
        const cvv = document.getElementById('cvv').value.trim();

        // Regular expressions for validation
        const phoneRegex = /^[0-9]{10}$/;
        const emailRegex = /^[^ @]+@gmail\.com$/;
        const cardRegex = /^\d{16}$/;
        const cvvRegex = /^\d{3}$/;

        let isValid = true;
        let errorMessage = '';

        if (name === '') {
            isValid = false;
            errorMessage += 'Name is required.\n';
        }

        if (!phoneRegex.test(phone)) {
            isValid = false;
            errorMessage += 'Phone number must be 10 digits.\n';
        }

        if (!emailRegex.test(email)) {
            isValid = false;
            errorMessage += 'Please enter a valid Gmail address.\n';
        }

        if (address === '') {
            isValid = false;
            errorMessage += 'Address is required.\n';
        }

        if (!cardRegex.test(cardNumber)) {
            isValid = false;
            errorMessage += 'Card number must be 16 digits.\n';
        }

        if (expiry === '') {
            isValid = false;
            errorMessage += 'Expiry date is required.\n';
        }

        if (!cvvRegex.test(cvv)) {
            isValid = false;
            errorMessage += 'CVV must be 3 digits.\n';
        }

        if (isValid) {
            // Here you can handle the form data, e.g., send it to a server
            console.log('Form submitted successfully');
            form.reset();
            successMessage.style.display = 'block';
            // Hide the success message after 5 seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
        } else {
            alert(errorMessage);
        }
    });
});
