import LoadGame from './start';

const userTyping = document.getElementById('user-input')
const startGame = document.getElementById('start-game')



// let count = 5;
// function countdown() { 
    //     setInterval( () => {
        //         if (count <= 0) {
//             clearInterval(countdown);
//             document.getElementById('countdown').innerHTML = null
//         } else {
//             document.getElementById('countdown').innerHTML = 'Begin in ' + count
//         }
//         count -= 1;
//     }, 1000)
// };

startGame.addEventListener('click', () => {
    // countdown();
    LoadGame();
    userTyping.focus();
});

userTyping.addEventListener('input', () => {
    // LoadGame();
    // console.log('hi')
})