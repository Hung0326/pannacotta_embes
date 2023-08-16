window.addEventListener('scroll', () => {
  console.log(window.pageYOffset)
  if (window.pageYOffset > 150) {
    document.querySelector('a.make_phone_call').classList.add('active')
  } else {
    document.querySelector('a.make_phone_call').classList.remove('active')
  }
});

let currentImgs = document.querySelectorAll('.img-i img')
let overlayImgs = document.querySelector('.img_overlay')
let modalImg = document.querySelector('.modal_img')
let modalCImg = document.querySelector('.modal_img img')
currentImgs.forEach(element => {
  element.addEventListener('click', (e) => {
    const urlImg = e.currentTarget.src
    modalCImg.src = urlImg
    modalImg.classList.add('active')
    overlayImgs.style.backgroundImage = 'url(' + urlImg + ')';
    overlayImgs.classList.add('active')
  })
});
overlayImgs.addEventListener('click', () => {
  overlayImgs.classList.remove('active')
  document.querySelector('.modal_img.active').classList.remove('active')
  modalCImg.src = ''
})
