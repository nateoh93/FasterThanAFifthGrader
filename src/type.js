const userTyping = document.getElementById('user-input');

function UserTyping() {
    let userInputs = userTyping.value.split('');
    let quote = document.querySelectorAll('span');

    if (!startTime) {
        startTime = new Date();
        console.log('this is the start ' + startTime)
    }
    

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
        };
    });

    let lastChar = quote.length - 1
    if (quote[lastChar].innerHTML === userInputs[lastChar]) {
        endTime = new Date()
        console.log(endTime)
    }
};

let startTime = null;
let endTime = null;

export default UserTyping;