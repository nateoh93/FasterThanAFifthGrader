let pos = 'leftFoot';

function Animate() {
    const character2 = document.getElementById('char2');
    if (pos === 'leftFoot') {
        character2.src = 'public/images/erun_010.png';
        pos = 'midFoot'; 
    } else if (pos === 'midFoot') {
        character2.src = 'public/images/erun_020.png';
        pos = 'rightFoot'; 
    } else {
        character2.src = 'public/images/erun_000.png';
        pos = 'leftFoot'; 
    }
}

export default Animate;