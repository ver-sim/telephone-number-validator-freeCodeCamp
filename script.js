const input = document.querySelector('#user-input')
const checkBtn = document.querySelector('#check-btn');
const clearBtn = document.querySelector('#clear-btn');
const result = document.querySelector('#results-div');


const checkTelephoneNumber = (number) => {
    if (!number) {
       return alert("Please provide a phone number");
    }
    const regex = /^(1\s?)?(?:\d{3}|\(\d{3}\))([-|\s]?)\d{3}([-|\s]?)\d{4}$/;
    const text = document.createElement('p');
    text.textContent = regex.test(number) ? `Valid US number: ${number}` : `Invalid US number: ${number} `;
    return result.appendChild(text);
};

checkBtn.addEventListener('click', () => {
    checkTelephoneNumber(input.value);
    input.value = '';
});

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter'){
        checkTelephoneNumber(input.value);
        input.value = '';
    }
});

clearBtn.addEventListener('click', () => {
    result.innerHTML = ''
});



