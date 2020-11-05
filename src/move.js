function Move(pixels) {
    const char2 = document.getElementById('char2');

    if (parseFloat(char2.style.left) <= 0 && pixels <= 0) {
        char2.style.left = 0 + 'px';
    } else {
        char2.style.left = pixels + 'px';
    }

}

export default Move;