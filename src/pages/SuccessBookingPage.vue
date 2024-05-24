<template>
    <div>
        <div class="container">
            <div class="qr-code-block">
                <div class="qr-code">
                    <img src="@/assets/imgs/qr-code.png" alt="">
                </div>
                <div class="bot-information">
                    <div class="bot-information-title">
                        Вы успешно записаны!
                    </div>
                    <a href="https://t.me/fix_master_client_bot" class="bot-information-url">
                        t.me/fix_master_bot
                    </a>
                    <div class="bot-information-short-description">
                        Что бы отслеживать статус заявки перейдите по ссылке и запустите бота
                    </div>
                    <a class="main-button" hef="/">Вернуться на главную</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "SuccessBookingPage",
    
}

</script>
<style>
.qr-code-block{
    margin-top: 150px;
    margin-bottom: 120px;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center
}
.qr-code img{
    width: 280px;
    height: 280px;
}
.bot-information{
    display: flex;
    flex-direction: column;
    align-items: start;
}
.bot-information-title{
    font-size: 42px;
    
}

.bot-information-url{
    font-size: 32px;
    font-weight: 700;
    margin-top: 20px;
}
.bot-information-short-description{
    font-size: 12px;
    width: 250px;
    font-weight: 300;
    
}
.main-button{
    margin-top: 20px;
    border-radius: 9px;
    background-color: #7100E3;
    color: white;
    padding: 15px;
    
}
@media  (max-width:650px) {
    .qr-code-block{
        flex-direction: column;
    }
}
@media  (max-width:390px) {
    .bot-information-title{
        font-size: 30px;
    }
    .bot-information-url{
        font-size: 24px;
        color: #7a52a8;
        text-decoration:dotted;
    }
}
</style>