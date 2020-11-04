// char2.style.left = '0px';

function Move(pixels) {
    let char2 = document.getElementById('char2');
    // let pos += pixels;
    // char2.style.left = pos + pixels + 'px';
    // debugger
    // console.log(pixels);
    console.log(char2.style.left);
    if (parseFloat(char2.style.left) <= 0 && pixels <= 0) {
        char2.style.left = 0 + 'px';
    } else {
        char2.style.left = pixels + 'px';
    }

}

export default Move;