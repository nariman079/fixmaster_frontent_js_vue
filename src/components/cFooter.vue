<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-line">
                <div class="footer-logo">
                <a href="/"><img src="@/assets/imgs/Group 39514.png" alt="" width="400"></a>
                </div>
                <div class="footer-nav">
                    <router-link to="/" class="footer-nav-url">О нас</router-link>
    
                    <router-link to="/" v-for="type in type_list" 
                        :key="type.id" 
                        href="@" 
                        class="footer-nav-url"
                    >{{ type.title }}</router-link>
                  
                </div>
                <div class="footer-contacts">
                    <a href="address:Адрес: ул. Примерная, д. 123, Москва"> ул. Примерная, д. 123, Москва</a>
                    <a href="tel:+7 (495) 123-45-67">+7 (495) 123-45-67</a>
                    <a>Пн-Пт 9:00 - 18:00</a>
                    <a href="mailto:fix-master@gmail.com" class="mail">
                        fix-master@gmail.com
                    </a>
                    <div class="social-nets">
                        <a href=""><img src="https://icon-icons.com/icons2/3717/PNG/512/telegram_chat_brand_communication_message_free_icon_230295.png" width="30px" alt=""></a>
                        <a href=""><img src="https://icon-icons.com/icons2/3717/PNG/512/telegram_chat_brand_communication_message_free_icon_230295.png" width="30px" alt=""></a>
                    </div>
                </div>
            </div>
            </div>
    </footer>
    <p :style="{backgroundColor: '#7100E3',
     margin:'0px', 
     color: 'white'}" align="center">&copy; 2024 FixMaster. Все права защищены.</p>
</template>

<script>
  export default {
    name: 'cFooter',
    data() {
        return {
            url:process.env.VUE_APP_BACKEND_URL,
            type_list:[
                {
                    id:1,
                    title: "SPA",
                  
                },
                {
                    id:2,
                    title: "Salon"
                },
                {
                    id:3,
                    title: "BarberShop"
                }
            ]
        }
    },
  }
</script>
  
<style>
 
</style>
  