let difficulty = 25;
let firstImg = 'public/images/drun_010.png';
let secondImg = 'public/images/drun_020.png';
let thirdImg = 'public/images/drun_000.png';
let img;

document.getElementById('5thgrader').onclick = () => {
    document.getElementById('char1').src = 'public/images/drun_000.png';
    document.getElementById('computer').innerHTML = '5th Grader';
    difficulty = 25;
    firstImg = 'public/images/drun_010.png';
    secondImg = 'public/images/drun_020.png';
    thirdImg = 'public/images/drun_000.png';
}

document.getElementById('student').onclick = () => {
    document.getElementById('char1').src = 'public/images/brun_000.png';
    document.getElementById('computer').innerHTML = 'Student';
    difficulty = 35;
    firstImg = 'public/images/brun_010.png';
    secondImg = 'public/images/brun_020.png';
    thirdImg = 'public/images/brun_000.png';
}

document.getElementById('programmer').onclick = () => {
    document.getElementById('char1').src = 'public/images/run_000.png';
    document.getElementById('computer').innerHTML = 'Programmer';
    difficulty = 55;
    firstImg = 'public/images/run_010.png';
    secondImg = 'public/images/run_020.png';
    thirdImg = 'public/images/run_000.png';
}

document.getElementById('elite').onclick = () => {
    document.getElementById('char1').src = 'public/images/crun_000.png';
    document.getElementById('computer').innerHTML = 'Elite';
    difficulty = 75;
    firstImg = 'public/images/crun_010.png';
    secondImg = 'public/images/crun_020.png';
    thirdImg = 'public/images/crun_000.png';
}

document.getElementById('creator').onclick = () => {
    document.getElementById('char1').src = 'public/images/arun_000.png';
    document.getElementById('computer').innerHTML = 'Creator';
    difficulty = 115;
    firstImg = 'public/images/arun_010.png';
    secondImg = 'public/images/arun_020.png';
    thirdImg = 'public/images/arun_000.png';
}

function compMove() {
    let char1 = document.getElementById('char1');
    let pos = 0;
    let auto = setInterval(frames, 125);
    let position = 'leftFoot';

    let quote = document.querySelectorAll('span');
    let length = quote.length;
    let speed = (difficulty * 5) / 480;
    let steps = length / speed;

    function frames() {
        if (pos === 500 || parseInt(char1.style.left) >= 500) {
            clearInterval(auto);
        } else {
            if (position === 'leftFoot') {
                char1.src = firstImg;
                position = 'midFoot'; 
            } else if (position === 'midFoot') {
                char1.src = secondImg;
                position = 'rightFoot'; 
            } else {
                char1.src = thirdImg;
                position = 'leftFoot'; 
            };
            
            pos += (500 / steps);
            char1.style.left = pos + 'px'
        };

    };
};

export default compMove;