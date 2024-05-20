
let count_template = `<div class="count"></div>`


let nav_menu = document.getElementById('mobile-menu')
let nav_mobile_background = document.getElementById('nav-mobile-btn')
let menu_logo = document.getElementById('menu-logo-img')
let counter = document.getElementById('counter')

menu_logo.onclick = async function (){
    menu_logo.src = 'https://icon-icons.com/icons2/2518/PNG/512/x_icon_150997.png'
    nav_menu.style.left = '0'
    nav_mobile_background.style.display = 'block'
}
nav_mobile_background.onclick = async function  () {
    
    nav_menu.style.left = "-100%"
    nav_mobile_background.style.display = 'none'
    menu_logo.src = 'https://cdn-icons-png.flaticon.com/512/5259/5259008.png '

}
let currentIndex = 0;
const images = document.querySelectorAll('.slider img');
images.forEach(el => {
  counter.innerHTML += count_template,
  el
});
const counters = document.querySelectorAll('.counter .count')
counters[0].classList.add('c-index')

function showImage(index) {
  images[currentIndex].classList.remove('active');
  images[index].classList.add('active');
  currentIndex = index;
}

let next_btn = document.getElementById('next')
let prev_btn = document.getElementById('prev')
function nextSlide() {
  let index = currentIndex + 1;
  counters[index-1].classList.remove('c-index')
  counters[index].classList.add('c-index')
  if (index >= images.length) {
    index = 0;
  }
  console.log(index);
  showImage(index);
}
function prevSlide() {
  let index = currentIndex - 1;
  counters[index+1].classList.remove('c-index')
  counters[index].classList.add('c-index')
      if (index < 0) {
        index = images.length - 1;
      }
      showImage(index);
}
next_btn.onclick = nextSlide

prev_btn.onclick = prevSlide

let startPoint;
let moved = false;
const slider = document.getElementById('slider')
function touch(e) {
  e.preventDefault();
  startPoint = e.changedTouches[0].pageX;
}
function move(e) {
  if (moved) {
    return;
  }
  e.preventDefault();
  if (e.changedTouches[0].pageX > startPoint + slider.offsetWidth / 4) {
    
    moved = true;
    prevSlide()
  }
  if (e.changedTouches[0].pageX < startPoint - slider.offsetWidth / 4) {
    console.log('Налево')
    
    moved = true;
    nextSlide()
  
     }
}
if (window.outerWidth < 650){
  next_btn.style.display = 'none'
  prev_btn.style.display = 'none'
  console.log(window.innerWidth)
  

  
  
  
  
  slider.ontouchstart = touch
  slider.ontouchmove = move
  slider.addEventListener("touchend", () => {
    setTimeout(() => {
      moved = !moved;
    }, 200);
  });
}

showImage(currentIndex);

