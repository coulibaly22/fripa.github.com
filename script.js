// script.js

function searchContacts() {
    const input = document.getElementById('search-bar').value.toLowerCase();
    const contacts = document.querySelectorAll('.contact');

    contacts.forEach(contact => {
        const name = contact.getAttribute('data-name').toLowerCase();
        const number = contact.getAttribute('data-number').toLowerCase();

        if (name.includes(input) || number.includes(input)) {
            contact.style.display = '';
        } else {
            contact.style.display = 'none';
        }
    });
}

function selectContact(number) {
    // Rediriger vers WhatsApp avec le numéro sélectionné
    window.location.href = `https://wa.me/${number}`;
}
