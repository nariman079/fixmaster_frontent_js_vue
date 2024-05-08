let header_template = `<div class="container">
<div class="header-line">
  <div class="header-logo">
    <img class="mid-logo" src="imgs/Group 1188midlogo.png" width="180">
    <img class="logo" src="imgs/Group 1187logo.png" alt="" width="30px">
  </div>
  <div class="search">
    <img src="imgs/Group 1189.png" alt="" width="20">
    <input class="search-input" type="text" placeholder="Поиск">
  </div>
  
  <div class="nav">
    <a href="" class="nav-url">Салоны</a>
    <a href="" class="nav-url">Парихмахерские</a>
  </div>
  
  <div class="menu-logo">
    <img id="menu-logo-img" class="menu-logo-img" width="30" src="https://cdn-icons-png.flaticon.com/512/5259/5259008.png " alt="">
    <div id="mobile-menu" class="header-line-mobile">
      <div class="header-logo-mobile">
        <img src="imgs/Group 1188midlogo.png" width="180">
      </div>
      <div class="nav-mobile">
        <a href="" class="nav-url-mobile">Салоны</a>
        <a href="" class="nav-url-mobile">Парихмахерские</a>
      </div>
      <button  id="nav-mobile-btn" class="nav-mobile-background"></button>
    </div>
</div>
    
    </div>
  </div>
</div>
<div class="header-block"></div>
</div>`
let footer_template = `<div class="container">
<div class="footer-line">
    <div class="footer-logo">
        <img src="imgs/Group 39514.png" alt="" width="400">
    </div>
    <div class="footer-nav">
        <a href="@" class="footer-nav-url">О нас</a>
        <a href="@" class="footer-nav-url">СПА</a>
        <a href="@" class="footer-nav-url">Салоны</a>
        <a href="@" class="footer-nav-url">Парихмахерские</a>
    </div>
    <div class="footer-contacts">
        <div class="mail">
            fix-master@gmail.com
        </div>
        <div class="social-nets">
            <a href=""><img src="https://icon-icons.com/icons2/3717/PNG/512/telegram_chat_brand_communication_message_free_icon_230295.png" width="30px" alt=""></a>
            <a href=""><img src="https://icon-icons.com/icons2/3717/PNG/512/telegram_chat_brand_communication_message_free_icon_230295.png" width="30px" alt=""></a>

        </div>
    </div>
</div>
</div>`
let count_template = `<div class="count"></div>`
let header = document.getElementById('header')
let footer = document.getElementById('footer')
header.innerHTML += header_template
footer.innerHTML += footer_template

let nav_menu = document.getElementById('mobile-menu')
let nav_mobile_background = document.getElementById('nav-mobile-btn')
let menu_logo = document.getElementById('menu-logo-img')
let counter = document.getElementById('counter')

menu_logo.onclick =async function (){
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
images.forEach(element => {
  counter.innerHTML += count_template
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
function prevSlide(params) {
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

if (window.outerWidth < 650){
  next_btn.style.display = 'none'
  prev_btn.style.display = 'none'
  console.log(window.innerWidth)
  const slider = document.getElementById('slider')

  let startPoint;
  let moved = false;
  
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
  
  slider.ontouchstart = touch
  slider.ontouchmove = move
  slider.addEventListener("touchend", () => {
    setTimeout(() => {
      moved = !moved;
    }, 200);
  });
}

showImage(currentIndex);

