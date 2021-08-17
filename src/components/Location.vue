<template>
  <div class="location"> 
      <div class="carta">
        <div class="img" 
            :style="{'background-image':'url('+require('@/assets/img/carta.jpg')+')'}">
        </div>
      </div>
      <div class="container">
        <div class="information"> 
          <div class="boxs"> 
            <div class="information__title">КОНТАКТНАЯ ИНФОРМАЦИЯ</div>
            <div class="place">г. Ташкент, ул. КаттаБово, 41/3</div>
            <div class="time">Часы работы: 9:00 — 21:00</div>
            <div class="phone"> <img src="@/assets/img/phone.svg" alt=""/>
              <div class="number">+99 (899) 123-28-05</div>
            </div>
            <div class="email"> <img src="@/assets/img/mail.svg" alt=""/>
              <div class="mail">bookland@gmail.com</div>
            </div>
            <button class="btn"> обратная связь</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>