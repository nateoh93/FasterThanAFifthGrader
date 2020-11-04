
function compMove() {
    let char1 = document.getElementById('char1');
    let pos = 0;
    let auto = setInterval(frames, 100);

    function frames() {
        if (pos === 500) {
            clearInterval(auto);
        } else {
            pos += 1;
            char1.style.left = pos + 'px'
        };
    };
};

export default compMove;