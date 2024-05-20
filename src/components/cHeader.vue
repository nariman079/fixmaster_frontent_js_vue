<template>
    
    <div class="header" id="header">
        <div class="un-header-line"></div>
          <div class="container">
            <div class="header-line">
              <div class="header-logo">
                <router-link  to="/"><img class="mid-logo" src="@/assets/imgs/Group 39514.png" width="180"></router-link>
                <router-link to="/"><img class="logo" src="@/assets/imgs/Group 1187logo.png" alt="" width="30px"></router-link>
              </div>
              <div class="search">
                <datalist id="suggestions">
                 <option v-for="result in searchResult" :key="result.id"><router-link to="/">{{ result.title }}</router-link></option>
                </datalist>
                <img src="@/assets/imgs/Group 1189.png" alt="" width="20">
                <input list="suggestions" @change="searchOrganization()" v-model="searchText" class="search-input" type="text" placeholder="Поиск">
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
        this.searchResult = searchOrganizationServerData
        console.log("Test")
      }
    }

  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

  </style>
  