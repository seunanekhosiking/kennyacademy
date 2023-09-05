document.getElementById('whatsappForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    
    // Phone number to send the message to
    const phoneNumber = '+27789214737';
    
    // Create a WhatsApp message link
    const whatsappMessage = `Hi, my name is ${name} ${surname}, and my email is ${email}.`;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Redirect the user to WhatsApp
    window.location.href = whatsappLink;
});
