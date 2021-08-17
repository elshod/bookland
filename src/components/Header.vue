<template>
  <div>
      <header class="header" id="home">
      <div class="header__top">
        <div class="header__container container">
          <ul class="menu"> 
            <li v-for='(m,index) of menu' :key='index'> 
                <router-link :to='m.link'>{{m.title}}</router-link>
            </li>
          </ul>
          <div class="phone"> 
            <div class="phone__item">
              <div class="phone__icon"><img src="@/assets/img/phone.png" alt=""/></div>
              <div class="number">+99 (899) 148-28-05</div>
            </div>
            <div class="place"> 
              <div class="icons"><img src="@/assets/img/loc.svg" alt=""/></div>
              <div class="places"> Ташкент, ул. КаттаБово, 41/3</div>
            </div>
          </div>
          <div class="social"><a class="ins" href="#"> <img src="@/assets/img/instagram.png" alt=""/></a></div>
        </div>
      </div>
      <div class="header__bottom">
        <div class="header__container container">
          <div class="header__items">
              <router-link class="logo" to="/">
                  <img src="@/assets/img/logo.png" alt=""/>
            </router-link>
            <div class="header__title">Книжный магазин: книги, бестселлеры, новинки</div>
            <div class="icons"> 
              <router-link to='/cabinet' class="user">
                    <img src="@/assets/img/user.svg" alt=""/>
                </router-link>
                <router-link class="heart" to='/fav'>
                  <img src="@/assets/img/heart.svg" alt=""/>
                </router-link>
                <router-link to='/cart' class="shopping">
                    <img src="@/assets/img/shopping.svg" alt=""/>
                </router-link>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="box">
      <div class="container">
        <div class="search"> 
          <input type="text" placeholder="искать в каталоге"/><a href=""><img src="@/assets/img/right.png" alt=""/></a>
        </div>
        <div class="category"> 
          <div class="category__box"> 
            <div class="title">КАТАЛОГ <span>ПРОДУКЦИИ</span></div>
            <div class="img"><img src="@/assets/img/burgerD.svg" alt=""/></div>
            <button class="btn"> <span> </span></button>
          </div>
        </div>
      </div>
    </div><a class="top" href="#home"><img src="@/assets/img/top.svg" alt=""/></a>
    <div class="headerMobil"> 
      <div class="headerMobil__top"> 
        <div class="container"> 
          <div class="items">
            <button class="burgerMenu"> <img class="phone__item" src="@/assets/img/burgerU.svg" alt=""/></button>
            <div class="phone__icon"><img src="@/assets/img/phone.png" alt=""/>
              <div class="number">+99 (899) 148-28-05</div>
            </div>
            <div class="search__icon"> <img src="@/assets/img/searchI.svg" alt=""/></div>
          </div>
          <div class="search"> 
            <input type="text" placeholder="искать в каталоге"/><a href=""><img src="@/assets/img/right.png" alt=""/></a>
          </div>
        </div>
      </div>
      <div class="headerMobil__bottom"> 
        <div class="container"> 
          <div class="logo"><img src="@/assets/img/logot.svg" alt=""/></div>
          <div class="items">
            <div class="category"> 
              <div class="category__box"> 
                <div class="title">КАТАЛОГ </div>
                <div class="img"><img src="@/assets/img/burgerD.svg" alt=""/></div>
              </div>
            </div>
            <div class="icons"> 
                <router-link to='/cabinet' class="user">
                    <img src="@/assets/img/user.svg" alt=""/>
                </router-link>
                <router-link class="heart" to='/fav'>
                  <img src="@/assets/img/heart.svg" alt=""/>
                </router-link>
                <router-link to='/cart' class="shopping">
                    <img src="@/assets/img/shopping.svg" alt=""/>
                </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            menu: [
                {title:'Услуги', link: '/services'},
                {title:'Оплата и доставка', link: '/payment'},
                {title:'Обратная связь', link: '/feedback'},
                {title:'Контакты', link: '/contact'},
            ]
        }
    },
}
</script>

<style>

</style>