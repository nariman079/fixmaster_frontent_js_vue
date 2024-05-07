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
let header = document.getElementById('header')
header.innerHTML += header_template

let nav_menu = document.getElementById('mobile-menu')
let nav_mobile_background = document.getElementById('nav-mobile-btn')
let menu_logo = document.getElementById('menu-logo-img')

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
