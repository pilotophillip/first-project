let emailElement = document.querySelector('#email');
let messageElement = document.querySelector('#message');
let submitButton = document.querySelector('#submit-button');

submitButton.addEventListener('click', function(e) {
    e.preventDefault(); 

    let emailValue = emailElement.value.trim();
    let messageValue = messageElement.value.trim();

    if (emailValue.includes('@') && emailValue.includes('.')) {
        alert('Thanks for your message! - Phillip');
        emailElement.value = "";
        messageElement.value = "";
    } else {
        alert('Please enter a valid email address.');
    }
});