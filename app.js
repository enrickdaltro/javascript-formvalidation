// CREATE EVENT LISTENERS TO UI FIELDS
// FORM BLUR EVENT LISTENERS
document.querySelector('#name').addEventListener('blur', validadeName);
document.querySelector('#zip').addEventListener('blur', validadeZip);
document.querySelector('#email').addEventListener('blur', validateEmail);
document.querySelector('#phone').addEventListener('blur', validadePhone);

// EVENT LISTENERS FUNCTIONS
function validadeName() {
    // CREATE A VARIABLE TO GET THE VALUE PASSED INTO THE INPUT FIELD
    const name = document.querySelector('#name');
    // CREATE A VARIBLE TO STORE OUR REGULAR EXPRESSIONS
    const re = /^[a-zA-Z]{2,10}$/;

    // EVALUATE
    if (!re.test(name.value)) {
        // GET THE INPUT FIELD BY HIS ID AND ADD A CLASS
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
    }
}

function validadeZip() {
    // CREATE A VARIABLE TO GET THE VALUE PASSED INTO THE INPUT FIELD
    const zip = document.querySelector('#zip');
    // CREATE A VARIBLE TO STORE OUR REGULAR EXPRESSIONS
    const re = /^[0-9]{5}(-[0-9]{3})$/;

    // EVALUATE
    if (!re.test(zip.value)) {
        // GET THE INPUT FIELD BY HIS ID AND ADD A CLASS
        zip.classList.add('is-invalid');
    } else {
        zip.classList.remove('is-invalid');
    }
}

function validateEmail() {
    // CREATE A VARIABLE TO GET THE VALUE PASSED INTO THE INPUT FIELD
    const email = document.querySelector('#email');
    // CREATE A VARIBLE TO STORE OUR REGULAR EXPRESSIONS
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    // EVALUATE
    if (!re.test(email.value)) {
        // GET THE INPUT FIELD BY HIS ID AND ADD A CLASS
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
    }
}

function validadePhone() {
    // CREATE A VARIABLE TO GET THE VALUE PASSED INTO THE INPUT FIELD
    const phone = document.querySelector('#phone');
    // CREATE A VARIBLE TO STORE OUR REGULAR EXPRESSIONS
    const re = /^[0-9]{3}(-[0-9]{3})(-[0-9]{4})$/;

    // EVALUATE
    if (!re.test(phone.value)) {
        // GET THE INPUT FIELD BY HIS ID AND ADD A CLASS
        phone.classList.add('is-invalid');
    } else {
        phone.classList.remove('is-invalid');
    }
}
