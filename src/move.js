let char1 = document.getElementById('char1');
// char1.style.left = '0px';

function Move(pixels) {
    // let pos = '0px';
    char1.style.left = parseInt(char1.style.left) + pixels + 'px';
    console.log(char1.style.left);
}

export default Move;