<template>
    
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
                                    <div :style="{backgroundImage: `url(` + master.image +`)`}" ></div>

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
                               <button @click="selectBookingTime(time, is_free)" :class="{'active':this.bookingData.begin_time === time.time}" type="button" v-for="(time, index) in freeTimes" :key="index"  :disabled="!time.is_free">
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
                                <input @input="clearErrorList" required v-model="bookingData.customer_name" type="text" placeholder="Имя">
                                <input @input="clearErrorList" ref="customer_phone" required v-model="bookingData.customer_phone" type="text" placeholder="Номер телефона">
                                <textarea  v-model="bookingData.customer_notice" name="" id="" placeholder="Коментарий" cols="40"></textarea>
                                <div class="accept_checkbox">
                                    <input type="checkbox"  id="accept_checbox">
                                    <label for="accept_checbox">Даю согласие на обработку персональных данных</label>
                                </div>
                                <button @click="sendBookingData" class="application-btn" type="button" >Записаться</button>
                                <ul>
                                    <li class="error" v-for="(error, index) in errorList" :key="index">{{ error }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                  </div>
            </div>
        </div>
        
</template>
<script>

import Inputmask from 'inputmask';

export default {
    name: "BookingPage",
    data (){
        return {
            errorList:[],
            organizationUrl:process.env.VUE_APP_BACKEND_URL + '/organizations/' + this.$route.params.id,
            orderCreateUrl: process.env.VUE_APP_BACKEND_URL + '/order/create/',
            freeTimesUrl: process.env.VUE_APP_BACKEND_URL + '/booking/get-free-times/',
            bookingData: {
                master_id: null,
                service_ids: [],
                begin_date: null,
                begin_time: null,
                customer_phone: null,
                customer_name: null,
                customer_notice: null
            },
            freeTimes: [],
            organization: {}}
    },
    mounted (){
      this.startPage()
      this.getOrganization()
      const inputMask = new Inputmask("+7 (999) 999-99-99");
      inputMask.mask(this.$refs.customer_phone)
    },
    methods: {
            removeValueFromArray(value, array) {
        return array.filter(function(item) {
        return item !== value;
        });
        },
        clearErrorList(){
            this.errorList = []
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
        async getOrganization(){
            const response = await fetch(
                this.organizationUrl, {
                    method: "GET"
                }
            )
            const jsonData = await response.json()
            this.organization = jsonData.data

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
            this.bookingData.begin_time = null
        },
        selectBookingTime(time){
            console.log(time)
            if (this.bookingData.begin_time === time.time){
                this.bookingData.begin_time = null
            } else if (time.is_free) {
                this.bookingData.begin_time = time.time
            } 
            this.errorList = []
        },
        selectMaster(masterId){
            if (this.bookingData.master_id === masterId){
                this.bookingData.master_id = null;
                
            }
            else {
                this.bookingData.master_id = masterId
            }
            
            this.bookingData.service_ids = []
            this.errorList  = []
            this.bookingData.begin_date = null
            this.freeTimes = []
        },
        selectService(serviceId){
            if (this.bookingData.service_ids.includes(serviceId)){
                this.bookingData.service_ids = this.removeValueFromArray(serviceId, this.bookingData.service_ids )
            }
            else {
                this.bookingData.service_ids.push(serviceId)
            }
            console.log(this.bookingData.service_ids)
            this.errorList = []
        },
        async requestBookingData(){
            const response = await fetch(
                this.orderCreateUrl,
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.bookingData)
                }
            )
            if (response.ok){
                this.$router.push(
                    {
                        name: 'successBooking'
                    }
                )
            }
            const jsonData = await response.json()
            console.log(jsonData)
        },
        sendBookingData(){
            if (this.errorList.length == 0){
                if (this.bookingData.master_id === null){
                this.errorList.push("Выберите мастера")
                }
                if (this.bookingData.service_ids.length === 0){
                    this.errorList.push('Выберите услугу')
                }
                if (this.bookingData.begin_date === null){
                    this.errorList.push('Выберите дату')
                }
                if (this.bookingData.begin_time === null){
                    this.errorList.push('Выберите время')
                }
                if (this.bookingData.customer_name === null){
                    this.errorList.push('Введите имя')
                }
                if (this.bookingData.customer_phone === null){
                    this.errorList.push('Введите номер телефона')
                }
                if (this.errorList.length == 0){
                    this.requestBookingData()
                }
                 
            }   
            
            
        }

    }
}
</script>
<style >
    .error{
        font-size: 21px;
        text-align: left;
        color: #ffadad;
    }
</style>