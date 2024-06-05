// payment.js

document.querySelector('.payment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const creditCardNumber = document.getElementById('creditcardnumber').value;
    const exp = document.getElementById('exp').value;
    const cvv = document.getElementById('cvv').value;

    if (!fullname || !email || !address || !creditCardNumber || !exp || !cvv) {
        alert('Please fill out all fields.');
        return;
    }

    if (!/^[0-9]{13,16}$/.test(creditCardNumber)) {
        alert('Please enter a valid credit card number.');
        return;
    }

    if (!/^[0-9]{2}\/[0-9]{2}$/.test(exp)) {
        alert('Please enter a valid expiration date in MM/YY format.');
        return;
    }

    if (!/^[0-9]{3}$/.test(cvv)) {
        alert('Please enter a valid 3-digit CVV.');
        return;
    }

    alert('Payment successful! Thank you.');
});
