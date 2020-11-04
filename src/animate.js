let pos = 'leftFoot';

// import img from '../public/images/r_000.png'
// import img2 from '../public/images/r_010.png'

function Move() {
    const character = document.getElementById('char1');
    if (pos === 'leftFoot') {
        character.src = 'public/images/r_010.png';
        pos = 'midFoot'; 
    } else if (pos === 'midFoot') {
        character.src = 'public/images/r_005.png';
        pos = 'rightFoot'; 
    } else {
        character.src = 'public/images/r_000.png';
        pos = 'leftFoot'; 
    }
}

export default Move;

let timer = setInterval(Move(), 1000)