const userTyping = document.getElementById('user-input');

function UserTyping() {
    let userInputs = userTyping.value.split('');
    let quote = document.querySelectorAll('span');

    quote.forEach( (char, idx) => {
        if (userInputs[idx] === undefined) {
            char.classList.remove('done');
            char.classList.remove('wrong');
        } else if (char.innerHTML === userInputs[idx]) {
            char.classList.remove('wrong');
            char.classList.add('done');
        } else {
            char.classList.remove('done');
            char.classList.add('wrong');
        } 
    })
}

export default UserTyping;