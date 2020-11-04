let pos = 'leftFoot';

// import img from '../public/images/r_000.png'
// import img2 from '../public/images/r_010.png'

function Animate() {
    const character = document.getElementById('char1');
    const character2 = document.getElementById('char2');
    if (pos === 'leftFoot') {
        character.src = 'public/images/r_010.png';
        character2.src = 'public/images/run_010.png';
        pos = 'midFoot'; 
    } else if (pos === 'midFoot') {
        character.src = 'public/images/r_005.png';
        character2.src = 'public/images/run_020.png';
        pos = 'rightFoot'; 
    } else {
        character.src = 'public/images/r_000.png';
        character2.src = 'public/images/run_000.png';
        pos = 'leftFoot'; 
    }
}

export default Animate;