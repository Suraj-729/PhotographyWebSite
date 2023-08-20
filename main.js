//change nav style on Scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
})

//contact button (cicular text button)

const textButtons = document.querySelectorAll('.contact__btn');

textButtons.forEach(textButtons => {
    let text = textButtons.querySelector('p');

    text.innerHTML = text.innerHTML.split('').map((character, index) => `<span style= "transform: rotate(${index * 12}deg)">${character}</span>`).join('')
})


var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById('fullImg');

function openFullImg(pic) {
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
    
}

function closeFullImg() {
    fullImgBox.style.display = "none";
}










