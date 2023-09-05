document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;

    // Phone number to send the message to (replace with your WhatsApp number)
    const phoneNumber = '+27789214737';

    // Create a WhatsApp message with registration details
    const whatsappMessage = `Hi, I'm interested in registering for KEYDEN Computer Academy. My name is ${name} ${surname}, and my email is ${email}.`;

    // Create a WhatsApp message link
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Redirect the user to WhatsApp
    window.location.href = whatsappLink;
});
