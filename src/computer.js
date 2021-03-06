let difficulty = 25;
let firstImg = 'public/images/drun_010.png';
let secondImg = 'public/images/drun_020.png';
let thirdImg = 'public/images/drun_000.png';

document.getElementById('5thgrader').onclick = () => {
    document.querySelectorAll('.active').forEach( ele => ele.classList.remove('active'));
    document.getElementById('5thgrader').classList.add('active');
    document.getElementById('char1').src = 'public/images/drun_000.png';
    document.getElementById('computer').innerHTML = '5th Grader';
    difficulty = 25;
    firstImg = 'public/images/drun_010.png';
    secondImg = 'public/images/drun_020.png';
    thirdImg = 'public/images/drun_000.png';
}

document.getElementById('student').onclick = () => {
    document.querySelectorAll('.active').forEach( ele => ele.classList.remove('active'));
    document.getElementById('student').classList.add('active');
    document.getElementById('char1').src = 'public/images/brun_000.png';
    document.getElementById('computer').innerHTML = 'Student';
    difficulty = 35;
    firstImg = 'public/images/brun_010.png';
    secondImg = 'public/images/brun_020.png';
    thirdImg = 'public/images/brun_000.png';
}

document.getElementById('programmer').onclick = () => {
    document.querySelectorAll('.active').forEach( ele => ele.classList.remove('active'));
    document.getElementById('programmer').classList.add('active');
    document.getElementById('char1').src = 'public/images/run_000.png';
    document.getElementById('computer').innerHTML = 'Programmer';
    difficulty = 55;
    firstImg = 'public/images/run_010.png';
    secondImg = 'public/images/run_020.png';
    thirdImg = 'public/images/run_000.png';
}

document.getElementById('elite').onclick = () => {
    document.querySelectorAll('.active').forEach( ele => ele.classList.remove('active'));
    document.getElementById('elite').classList.add('active');
    document.getElementById('char1').src = 'public/images/crun_000.png';
    document.getElementById('computer').innerHTML = 'Elite';
    difficulty = 75;
    firstImg = 'public/images/crun_010.png';
    secondImg = 'public/images/crun_020.png';
    thirdImg = 'public/images/crun_000.png';
}

document.getElementById('creator').onclick = () => {
    document.querySelectorAll('.active').forEach( ele => ele.classList.remove('active'));
    document.getElementById('creator').classList.add('active');
    document.getElementById('char1').src = 'public/images/arun_000.png';
    document.getElementById('computer').innerHTML = 'Creator';
    difficulty = 115;
    firstImg = 'public/images/arun_010.png';
    secondImg = 'public/images/arun_020.png';
    thirdImg = 'public/images/arun_000.png';
}

function compMove() {
    const char1 = document.getElementById('char1');
    const auto = setInterval(frames, 125);
    const quote = document.querySelectorAll('span');
    const length = quote.length;
    const speed = (difficulty * 5) / 480;
    const steps = length / speed;
    let pos = 0;
    let position = 'leftFoot';

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