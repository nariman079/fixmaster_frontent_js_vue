<template>
    <div class="article">
        <div class="container">
            <div class="block-title"> 
                Находите салоны красоты и СПА в Fix Master 
                <br>
                
                <br>
                <hr>
                <select class="filters" name="" id="">
                    <option value="">Все организации</option>
                    <option value="">Салон красоты</option>
                    <option value="">СПА</option>
                </select>
            
                <select class="filters" id="filters">
                    <option value="">Все услуги</option>
                    <option value="">Массаж</option>
                    <option value="">Стрижка</option>
                </select>
              </div>
        
             <div class="cards" id="cards">
              <router-link   v-for="organization in organizationList" :key="organization.id" to="/">
                <div class="card">
                  <div class="card-image">
                    <img class="card-img" :src="organization.main_image" alt="">
                  </div>
                  <div class="card-title">
                    {{  organization.title }}
                  </div>
                  <div class="card-address">
                   <img width="14px" src="https://icon-icons.com/icons2/2460/PNG/512/location_pin_place_map_address_placeholder_icon_149107.png" alt=""> 
                   {{ organization.address }}
                  </div>
                  <div class="card-work-schedule">
                    График работы:  {{ organization.work_schedule }}   {{ organization.time_begin }} - {{ organization.time_end }} <br>
                    {{ organization.closed_on }}
                  </div>
                  <div class="card-status open" v-if="organization.is_open">
                    Открыто
                  </div>
                  <div class="card-status close" v-else>
                    Закрыто
                  </div>
                </div>
              </router-link>
            </div>
        </div>
    </div>

  </template>
  
  <script>
  export default {
    name: 'MainPage',
    mounted (){
      this.getAllOrganizations()
    },
    data () {
      return {
        organizationApiUrl:process.env.VUE_APP_BACKEND_URL + '/organizations',
        organizationList: []
      }
    },
    methods: {
       async getAllOrganizations() {
        const response = await fetch(this.$data.organizationApiUrl, {
          method: "get",
          headers: {
            "Content-Type":"application/json"
          }
      })
      const parseJson = await response.json()
      const organizationDataList = parseJson.data
      organizationDataList.forEach(element => {
        this.$data.organizationList.push(element)
      });
      
      }
    }

  }
  </script>
  
  <style>
  .cards{
    justify-content: center;
    margin-top: 30px;
    width: 100%;
    grid-template-columns: repeat(4, 320px); 
    gap: 20px;
    display:grid;

  }
  .card{
    margin: 10px;
    width: 320px;
    display: flex;
   
    justify-content: center;
    flex-direction: column;
    
  }
  .card-img{
      height: 197px;
      background-size: cover;
  }
  .card-title{
    font-weight: 500;
    font-size: 20px;
    padding: 3px;
  }
  .card-address, .card-status, .card-work-schedule{
    font-size: 12px;
    padding: 3px;
  }
  .open{
    color: #65CD18;
  }
  .filters {
      margin-bottom: 5px;
      margin-left: 5px;
      background-color: #F0F0F0;
      padding: 10px 10px;
      border: none;
      border-right: 10px solid #F0F0F0;
      border-radius: 6px;
      outline: none;
      font-family: 'Manrope', sans-serif;
      font-size: 22;
  }
  @media (max-width:1560px) {
    
    .article-block{
        display: flex;
        flex-direction: column-reverse;
    }
    .organization-info{
        padding: 0;
    }
    .cards{
      grid-template-columns: repeat(3, 320px); 

    }
    .detail-organization-title{
      font-size: 50px;
      padding: 30px;
      font-weight: 600;
    } 
    
  }
  @media (max-width:1060px) {
    .cards{
      grid-template-columns: repeat(2, 320px); 

    }
    
    
  
  }
  @media  (max-width:840px) {
    
    .detail-organization-title{
      font-size: 30px;
      padding: 30px;
      font-weight: 600;
    } 
    
      .container{
        margin: 0px 30px;
      }
      .search-input{
        width: 200px;
      }
      .cards{
        grid-template-columns: repeat(2, 320px);
        gap: 5px;
      }
      .card{
        margin: 0;
      }
  }
  @media  (max-width:650px) {
    hr{
      display: none;
    }
      .container{
        margin: 0px 20px;
      }
      .nav{
        display: none;
      }
      .link{
        display: none;
      }
      
      .header-logo-mobile{
          
        margin: 10px 0px;
      }
      .header-logo-mobile img{
          margin-left: 30px;
      }
      .menu-logo{
        display: block;
      }
      
      
      .block-title{
        font-size: 20px;
        font-weight: 800;
      }
      .cards{
          grid-template-columns: repeat(1, 320px);
          gap: 5px;

        }
      
        .footer-logo img{
          width: 240px;
      }
      .slider {
    
        height: 350px;
        
        
      }
      .detail-organization-title{
        font-size: 30px;
        padding: 15px;
        font-weight: 600;
      } 
      .slider img {
        
        width: 90%;
       
        top: 1%;
        left: 5%;
      }
      .slider-btn{
        font-size: 40px;
      }
  }
  </style>
  