document.getElementById('whatsappForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    
    // Create a WhatsApp message link
    const whatsappMessage = `Hi, my name is ${name} ${surname}, and my email is ${email}.`;
    const whatsappLink = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Redirect the user to WhatsApp
    window.location.href = whatsappLink;
});
