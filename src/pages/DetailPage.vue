<template>
    <div>
        <div class="article">
            <div class="container">
            </div>
          </div>
          <div class="article">
            
            <div class="container">
              <div class="article-header">
                <div class="detail-organization-title">{{ organization.title }}</div>
                <div id="slider" class="slider">
                    <div :class="['img',{ 'active': index === imageIndex }]" ref="slider_img" v-for="(image, index) in organization.gallery" :key="image.id" :style="{backgroundImage:`url(`+image.image+`)`}"></div>
                    <button @click="prevImage" id="prev" class="prev controlls slider-btn">{{ "<" }}</button>
                    <button @click="nextImage" class="next controlls slider-btn">{{ ">" }}</button>
                    <div id="counter" class="counter">
                      <div v-for="(image, index) in organization.gallery" :key="image.id" :class="['count', { 'active': index == imageIndex }]"></div>
                    </div>  
              </div>  
            </div>
            </div>
          </div>
          <div class="article">
            <div class="container">
              <div class="article-block">
                <div class="organization-blocks">
                    <div class="organization-services">
                        <div class="block-title" style="color:aliceblue; padding-bottom:10px;">Услуги</div>
                        <div v-for="service in organization.services" :key="service.id" class="service-wrapper">
                            <div class="service-main-info">
                              <div class="service-title">
                                {{ service.title }}
                              </div>
                              <div class="service-title">
                                от {{service.price}}р<br>
                                <p>от {{ service.min_time }} мин</p>
                              </div>
                            </div>
                            <div class="service-description">
                                {{ service.short_description }}
                            </div>
                          </div>
                    </div>
                    <div class="organization-master">
                        <div class="block-title" style="color:aliceblue; padding-bottom:10px;">Мастера</div>
                        <div class="employee-wrapper" v-for="master in organization.masters" :key="master.id">
                            <div class="employee-main-info">
                              <div class="employee-image">
                                <div :style="{backgroundImage: `url(${master.image})`}" a  lt=""></div>
                              </div>
                              <div class="employee-name">
                                {{ master.name + " " + master.surname}} 
                              </div>
                            </div>
                            <div class="employee-skills">
                             {{ parseSkills(master.services) }}
                            </div>
                          </div>
                    </div>
                </div>
                
                  <div class="organization-info">
                    <div class="place-info">
                        <div class="place-info-address">
                          <img  width="14px" src="https://icon-icons.com/icons2/2460/PNG/512/location_pin_place_map_address_placeholder_icon_149107.png" alt=""> 
                          {{ organization.address }}
                        </div>
                        <div class="place-info-work-schedule">
                          <span class="work-schedule-title">График работы:</span><br>
                          {{organization.work_schedule}} {{ organization.time_begin }} - {{ organization.time_end }}
                          <br>
                          <div class="card-status open" v-if="organization?.is_open">
                            Открыто
                          </div>
                          <div class="card-status close" v-else>
                            Закрыто 
                          </div>
                        </div>
                    </div>
                    <div class="actions">
                      <a :href="`tel:${organization.contact_phone}`" class="call-btn">Позвонить</a>
                      <a @click="bookingPush(organization.id)" class="booking-btn">Записаться онлайн</a>
                    </div>
                </div>  
              </div>
                
            </div>
            
          </div>
    </div>
</template>
<script>


export default {
    name: "DetailPage",  
    created() {
        this.getOrganization()
    },
    data (){
        return {
            organizationUrl:process.env.VUE_APP_BACKEND_URL + '/organizations/' + this.$route.params.id,
            organization:{},
            imageIndex:0
        }
    },
  
    methods: {
        bookingPush(organizationId){
          this.$router.push({ name:'booking', params:{id:organizationId}}).then(()=>{
            window.location.reload()
          })
          
        },
        async getOrganization(){
            const response = await fetch(
                this.organizationUrl, {
                    method: "GET"
                }
            )
            const jsonData = await response.json()
            this.organization = jsonData.data
            console.log(this.$refs)

        },
       
        parseSkills(services){
            let result_title = ''
            services.forEach(element => {
                result_title += element.title.toLowerCase() + ', '
            });
            return result_title
        },
        showImage(index){
            this.imageIndex = index
        },
        prevImage(){
          if (this.imageIndex != 0){
            this.showImage(this.imageIndex-1)
          }
            
        },
        nextImage(){
          console.log(this.organization.gallery.length, this.imageIndex);
          if (this.imageIndex != this.organization.gallery.length-1){
            this.showImage(this.imageIndex+1)
          }
        }
    }
}
</script>
<style>
.organization-services , .organization-master{
    background-color: #936CFF;
    padding: 20px;
}
.service{
    background-color: aliceblue;
    padding: 10px;
    display: flex;
    align-items: center;
}

.service_main-information{
    padding: 10px;
    
}
.title{
    font-weight: 500;
    font-size: 32px;
    
}
.description{
    
}
.service_detail-information{
    width: 100px;
}
.price{
    font-size: 15px;
}
</style>