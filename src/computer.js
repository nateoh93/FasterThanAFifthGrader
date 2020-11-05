function compMove() {
    let char1 = document.getElementById('char1');
    let pos = 0;
    let auto = setInterval(frames, 125);
    let position = 'leftFoot';

    let quote = document.querySelectorAll('span');
    let length = quote.length;
    //need to pass in speed based on difficulty chosen
    let speed = (5*115)/480;
    let steps = length / speed;

    function frames() {
        if (pos === 500 || parseInt(char1.style.left) >= 500) {
            clearInterval(auto);
        } else {
            if (position === 'leftFoot') {
                char1.src = 'public/images/r_010.png';
                position = 'midFoot'; 
            } else if (position === 'midFoot') {
                char1.src = 'public/images/r_005.png';
                position = 'rightFoot'; 
            } else {
                char1.src = 'public/images/r_000.png';
                position = 'leftFoot'; 
            };
            
            pos += (500 / steps);
            char1.style.left = pos + 'px'
        };

    };
};

export default compMove;