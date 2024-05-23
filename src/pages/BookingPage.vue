<template>
    <div>
        <div class="article">
      
            <div class="container"> 
                <div class="block-title">Бронирование услуг в {{ organization.title }}
                </div>
                <div class="accordion">
                    <div class="accordion-item">
                      <div class="accordion-header">Выбрать мастера</div>
                      <div class="accordion-content">
                        <div id="employees" class="employees">
                            <div @click="selectMaster(master.id, $event)"  :class="['employee-wrapper', {'active': this.bookingData.master_id === master.id}]" v-for="master in organization.masters" :key="master.id">
                                <div class="employee-main-info">
                                  <div class="employee-image">
                                    <img :src="master.image" a  lt="">
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
                    </div>
                    <div class="accordion-item">
                      <div class="accordion-header">Выбрать услугу</div>
                      <div class="accordion-content">
                        <div id="services" class="services">
                        <div @click="selectService(service.id)" v-for="service in organization.services" :key="service.id" :class="['service-wrapper', {'active': bookingData.service_ids.includes(service.id)}]">
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
                     
                    </div>
                    
                    </div>
                    <div class="accordion-item">
                    <div class="accordion-header">Выбрать время</div>
                    <div class="accordion-content">
                        <div class="datetime-select">
                            <div class="date-select">
                            Дата <input v-model="bookingData.begin_date" @change="getFreeTimes" type="date" name="" id="">
                            </div>
                            <div class="time-select">
                               <button  type="button" v-for="(time, index) in freeTimes" :key="index"  :disabled="!time.is_free">
                                {{ time.time }}
                               </button> 
                            </div>
                            
                        </div>
                    </div>
                    </div>
                    <div class="accordion-item">
                        <div class="accordion-header">Дополнительная информация</div>
                        <div class="accordion-content">
                            <div class="additional-information">
                                <input type="text" placeholder="Имя">
                                <input type="text" placeholder="Номер телефона">
                                <textarea name="" id="" placeholder="Коментарий" cols="40"></textarea>
                                <div class="accept_checkbox">
                                    <input type="checkbox"  id="accept_checbox">
                                    <label for="accept_checbox">Даю согласие на обработку персональных данных</label>
                    
                                </div>
                                <button class="application-btn" type="submit">Записаться</button>
                                
                            </div>
                        </div>
                    </div>
                  </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "BookingPage",
    data (){
        return {
            freeTimesUrl: process.env.VUE_APP_BACKEND_URL + '/booking/get-free-times/',
            bookingData: {
                master_id: 1,
                service_ids: [],
                begin_date: '',
                begin_time: '',
                customer_phone: '',
                customer_name:'',
                customer_notice: ''
            },
            freeTimes: [],
            organization: { id: 1,
                            main_image: "https://booking.fix-mst.ru/media/business/salon3.jpg",
                            time_begin: "06:00",
                            time_end: "18:00",
                            is_open: true,
                            gallery: [],
                            masters: [
                                {
                                    id: 1,
                                    image: "https://booking.fix-mst.ru/media/master/Screenshot_from_2024-05-19_14-05-50.png",
                                    name: "Виктория",
                                    surname: "Шуменко",
                                    services: [
                                        {
                                            id: 1,
                                            title: "Стрижка"
                                        },
                                        {
                                            id: 2,
                                            title: "Укладка"
                                        }
                                    ]
                                },
                                {
                                    id: 2,
                                    image: "https://booking.fix-mst.ru/media/master/Screenshot_from_2024-05-19_14-05-50.png",
                                    name: "Бро",
                                    surname: "Брович",
                                    services: [
                                        {
                                            id: 1,
                                            title: "Стрижка"
                                        },
                                        {
                                            id: 2,
                                            title: "Укладка"
                                        }
                                    ]
                                }
                            ],
                            services: [
                                {
                                    id: 1,
                                    title: "Стрижка",
                                    short_description: "Стрижка для обеспечения головы",
                                    price: 1000,
                                    min_time: 90
                                },
                                {
                                    id: 2,
                                    title: "Укладка",
                                    short_description: "Укладка для укладки головы",
                                    price: 500,
                                    min_time: 30
                                }
                            ],
                            telegram_id: "",
                            title: "Студия красоты - Лето",
                            address: "Калашный пер. 4/1 (м.Арбатская",
                            contact_phone: "89288894224",
                            work_schedule: "5/2",
                            is_verified: true,
                            organization_type: 3
                        }
        }
    },
    mounted (){
      this.startPage()
    },
    methods: {
            removeValueFromArray(value, array) {
        return array.filter(function(item) {
        return item !== value;
        });
        },
        parseSkills(services){
            let result_title = ''
            services.forEach(element => {
                result_title += element.title.toLowerCase() + ', '
            });
            return result_title
        },
        startPage(){
            document.addEventListener("DOMContentLoaded", function() {
            const accordionHeaders = document.querySelectorAll(".accordion-header");
        
            accordionHeaders.forEach(header => {
            header.addEventListener("click", function() {
                const accordionItem = this.parentElement;
                accordionItem.classList.toggle("active");
            });
            });
  });
        },
        async getFreeTimes(){
            const response = await fetch(
                this.freeTimesUrl,
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        date: this.bookingData.begin_date,
                        master_id: this.bookingData.master_id
                    })
                }
            )
            const jsonData = await response.json()
            this.freeTimes = jsonData.data
        },
        selectMaster(masterId, event){
            if (this.bookingData.master_id === masterId){
                this.bookingData.master_id = null;
                
            }
            else {
                this.bookingData.master_id = masterId
            }
            
            this.bookingData.service_ids = []

            console.log(event.target.classList)
            
        },
        selectService(serviceId){
            if (this.bookingData.service_ids.includes(serviceId)){
                this.bookingData.service_ids = this.removeValueFromArray(serviceId, this.bookingData.service_ids )
            }
            else {
                this.bookingData.service_ids.push(serviceId)
            }
            console.log(this.bookingData.service_ids)
        }

    }
}
</script>
<style lang="">
    
</style>