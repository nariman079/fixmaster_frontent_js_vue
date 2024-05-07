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
    <img class="menu-logo-img" width="30" src="https://cdn-icons-png.flaticon.com/512/5259/5259008.png " alt="">
    <div class="header-line-mobile">
      <div class="header-logo-mobile">
        <img src="imgs/Group 1188midlogo.png" width="180">
      </div>
      <div class="nav-mobile">
        <a href="" class="nav-url-mobile">Салоны</a>
        <a href="" class="nav-url-mobile">Парихмахерские</a>
      </div>
    </div>
    <div>
    </div>
  </div>
</div>
<div class="header-block"></div>
</div>`
let header = document.getElementById('header')

header.innerHTML += header_template