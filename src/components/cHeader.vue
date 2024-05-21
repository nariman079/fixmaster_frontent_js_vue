<template>
    
    <div class="header" id="header">
        <div class="un-header-line"></div>
          <div class="container">
            <div class="header-line">
              <div class="header-logo">
                <router-link to="/"><img class="mid-logo" src="@/assets/imgs/Group 39514.png" width="180"></router-link>
                <router-link to="/"><img class="logo" src="@/assets/imgs/Group 1187logo.png" alt="" width="30px"></router-link>
              </div>
              <div>
                 <!-- <a v-for="result in searchResult" :key="result.id"><router-link to="/">{{ result.title }}</router-link></a> -->
                
                
                <!-- <input list="suggestions" :on-change="searchOrganization()" v-model="searchText" class="search-input" type="text" placeholder="Поиск"> -->
                <div class="search">
                  <img ref="search_logo" src="@/assets/imgs/Group 1189.png" alt="" width="20">

                  <input @input="searchOrganization" @focusout="unFocusInput" v-model="searchText" class="search-input" type="text" id="search-input" autocomplete="off" placeholder="Начните ввод...">
                </div>
                <div ref="dropdown" id="dropdown" class="dropdown-content ">
                  <router-link to="/organizations" class="dropdown-item" v-for="result in searchResult" :key="result.id">{{ result.title }}</router-link>
                </div>
              </div>
              
              <div class="nav">
                <a href="" class="nav-url">Салоны</a>
                <a href="" class="nav-url">Парихмахерские</a>
              </div>
              
              <div class="menu-logo">
                <!-- Меню для мобильной версии сайта  -->
                <img @click="openMenu" id="menu-logo-img" ref="menu_logo_img" class="menu-logo-img" width="30" src="https://cdn-icons-png.flaticon.com/512/5259/5259008.png " alt="">
                <div ref="nav_menu" id="mobile-menu" class="header-line-mobile">
                  <div class="header-logo-mobile">
                    <router-link to="/"><img src="@/assets/imgs/Group 1188midlogo.png" width="180"></router-link>
                  </div>
                  <div class="nav-mobile">
                    <a href="" class="nav-url-mobile">Салоны</a>
                    <a href="" class="nav-url-mobile">Парихмахерские</a>
                  </div>
                  <button @click="closeMenu" ref="nav_menu_backround"  id="nav-mobile-btn" class="nav-mobile-background"></button>
                </div>
              </div>
            </div>
              </div>
            
            <div class="header-block"></div>
            </div>
  </template>
  
  <script>
  export default {
    name: 'c_Header',
    data() {
      return {
        searchUrl: process.env.VUE_APP_BACKEND_URL + '/organization/search/',
        searchText: '',
        searchResult: []
      }
    },
    
    mounted() {
      
    },
    methods: {
      openMenu() {
        this.$refs.menu_logo_img.src = 'https://icon-icons.com/icons2/2518/PNG/512/x_icon_150997.png'
        console.log(this.$refs);
        this.$refs.nav_menu.style.left = '0'
        this.$refs.nav_menu_backround.style.display = 'block'
      },
      closeMenu() { 
        this.$refs.nav_menu.style.left = "-100%",
        this.$refs.nav_menu_backround.style.display = 'none'
        this.$refs.menu_logo_img.src = 'https://cdn-icons-png.flaticon.com/512/5259/5259008.png '
      },
      async searchOrganization() {
        const response = await fetch(this.searchUrl + '?search='  + this.searchText, {
          method: "GET",
          
        })
        const jsonData = await response.json()
        const searchOrganizationServerData = jsonData.data
        if (Object.keys(searchOrganizationServerData).length > 0) {
          
          this.searchResult = searchOrganizationServerData
          this.$refs.dropdown.style.display = 'flex';
          this.$refs.search_logo.src = 'https://icon-icons.com/icons2/2518/PNG/512/x_icon_150997.png'
          this.$refs.search_logo.onclick = () => {

            this.$refs.search_logo.src = require('@/assets/imgs/Group 1189.png')         
            this.$refs.dropdown.style.display = 'none';
            this.searchText = ''
            

          }
        }
        else{
          this.$refs.search_logo.src = require('@/assets/imgs/Group 1189.png')
          this.$refs.dropdown.style.display = 'none';

        }
        
        console.log("Test")
      },
      unFocusInput(){
        // this.$refs.dropdown.style.display = 'none';
      },
      clearSearchInput(){

      }
  }}
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style>
  .dropdown-content {
    position: absolute;
    width: 330px;
    background-color: rgb(207, 207, 207);
    border-top: none;
    margin-top: 5px;
    border-radius: 12px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 4;
    display: none;
    flex-direction: column;
    padding: 10px;
    background-color: #fff;
}
.dropdown-item {
    padding: 10px;
    cursor: pointer;
}

.dropdown-item:hover {
    background-color: #f1f1f1;
}
@media (max-width:840px) {
  .dropdown-content{
    width: 230px;
  }
}
@media (max-width: 390px) {
  .dropdown-content{
    width: 210px;
    border-radius: 6px;
    padding: 5px;
  }
}
  </style>
  