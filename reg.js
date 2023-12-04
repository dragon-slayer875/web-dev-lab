const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const phone = document.getElementById('phone');
const date = document.getElementById('date');
const month = document.getElementById('month');
const year = document.getElementById('year');
const form = document.getElementById('form');

for (let i = 1; i <= 31; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.innerText = i;
    date.appendChild(option);
}

for (let i = 1; i <= 12; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.innerText = i;
    month.appendChild(option);
}

for (let i = 2021; i >= 2000; i--) {
    const option = document.createElement('option');
    option.value = i;
    option.innerText = i;
    year.appendChild(option);
}

name.addEventListener('input', () => {
    if (name.validity.patternMismatch) {
        name.setCustomValidity('Please enter a valid name');
    }
    else if (name.validity.tooShort) {
        name.setCustomValidity('Name must be at least 6 characters long');
    }
    else {
        name.setCustomValidity('');
    }
})

email.addEventListener('input', () => {
    if (!email.validity.valid) {
        email.setCustomValidity('Please enter a valid email');
    }
    else {
        email.setCustomValidity('');
    }
})

password.addEventListener('input', () => {
    if (password.validity.tooShort) {
        password.setCustomValidity('Password must be at least 6 characters long');
    }
    else {
        password.setCustomValidity('');
    }
})

phone.addEventListener('input', () => {
    if (phone.validity.patternMismatch) {
        phone.setCustomValidity('Please enter a valid phone number');
    }
    else if (phone.validity.tooLong || phone.validity.tooShort) {
        phone.setCustomValidity('Phone number must be 10 digits long');
    }
    else {
        phone.setCustomValidity('');
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log(data);
    form.reset();
})