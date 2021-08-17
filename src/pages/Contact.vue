<template>
  <div class="contact"> 
      <div class="container"> 
        <div class="contact__title">Контакты</div>
        <div class="link"> 
            <router-link to="/">Главная  </router-link>
            <a href="#">Контакты</a></div>
        <div class="contact__item"> 
          <div class="items">
            <div class="adress">г. Иркутск, ул. КаттаБово, 41/3</div>
            <div class="workinHours">Часы работы: 9:00 — 21:00</div>
          </div>
          <div class="items">
            <div class="contacts"> <img src="@/assets/img/call.svg" alt=""/><span>+99 (899) 148-18-05</span></div>
            <div class="emails"> <img src="@/assets/img/massage.svg" alt=""/><span>bookland@gmail.com</span></div>
          </div>
          <button class="btn">обратная связь</button>
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