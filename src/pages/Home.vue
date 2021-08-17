<template>
  <div>
    <splide :options="options">
		<splide-slide>
			<div class="banner__img">
              <div class="img" :style="{'background-image':'url('+require('@/assets/img/slider.jpg')+')'}"></div>
            </div>
            <div class="container">
              <div class="banner__item"> 
                <div class="banner__title">бестселлеры</div>
                <div class="items"> 
                  <div class="year">2020 года </div>
                  <div class="sale"> <span>СКИДКА 20% до 25 августа</span><a class="img" href="#"><img src="@/assets/img/rightS.png" alt=""/></a></div>
                </div>
              </div>
            </div>
		</splide-slide>
		<splide-slide>
			<div class="banner__img">
              <div class="img" :style="{'background-image':'url('+require('@/assets/img/slider.jpg')+')'}"></div>
            </div>
            <div class="container">
              <div class="banner__item"> 
                <div class="banner__title">бестселлеры</div>
                <div class="items"> 
                  <div class="year">2020 года </div>
                  <div class="sale"> <span>СКИДКА 20% до 25 августа</span><a class="img" href="#"><img src="@/assets/img/rightS.png" alt=""/></a></div>
                </div>
              </div>
            </div>
		</splide-slide>
    </splide>
    <div class="product__item">
      <div class="filter isActive" data-id="famous">Популярные
        <div class="border isShow famous"><img src="@/assets/img/border.svg" alt=""/></div>
      </div>
      <div class="filter" data-id="modern">СОВРЕМЕННАЯ ПРОЗА
        <div class="border modern"><img src="@/assets/img/border.svg" alt=""/></div>
      </div>
      <div class="filter" data-id="children">для детей
        <div class="border children"><img src="@/assets/img/border.svg" alt=""/></div>
      </div>
      <div class="allCollection"> 
        <div class="title">все коллекции</div><a href=""><img src="@/assets/img/rightS.png" alt=""/></a>
      </div>
    </div>
    <div class="product isShow famous"> 
      <div class="container">
        <div class="row">
          <div class="col col-lg-4 col-md-6 col-mx-12">
            <div class="card"> 
              <div class="card__box"> 
                <div class="card__item"> 
                  <div class="title">Магия фэнтези</div>
                  <button><img class="imgH" src="@/assets/img/heartS.svg" alt=""/></button>
                </div>
                <div class="img"><img src="@/assets/img/product.jpg" alt=""/>
                  <div class="author">Никита Семин</div>
                </div>
                <div class="productName">Скайлор. Стажеры</div>
                <div class="card__items">
                  <div class="prise"> 
                    <div class="prise__title">цветной</div>
                    <div class="number">12 000 с</div>
                  </div>
                  <div class="prise"> 
                    <div class="prise__title">ч\б</div>
                    <div class="number">12 000 с</div>
                  </div>
                  <div class="prise"> 
                    <div class="prise__title">а3 формат</div>
                    <div class="number">12 000 с</div>
                  </div>
                  <div class="prise"> 
                    <div class="prise__title">а4 формат</div>
                    <div class="number">12 000 с</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col col-lg-4 col-md-6 col-mx-12">
            <div class="card"> 
              <div class="card__box"> 
                <div class="card__item"> 
                  <div class="title">Магия фэнтези</div>
                  <button><img class="imgH" src="@/assets/img/heartS.svg" alt=""/></button>
                </div>
                <div class="img"><img src="@/assets/img/product.jpg" alt=""/>
                  <div class="author">Никита Семин</div>
                </div>
                <div class="productName">Скайлор. Стажеры</div>
                <div class="card__items">
                  <div class="prise"> 
                    <div class="prise__title">цветной</div>
                    <div class="number">12 000 с</div>
                  </div>
                  <div class="prise"> 
                    <div class="prise__title">ч\б</div>
                    <div class="number">12 000 с</div>
                  </div>
                  <div class="prise"> 
                    <div class="prise__title">а3 формат</div>
                    <div class="number">12 000 с</div>
                  </div>
                  <div class="prise"> 
                    <div class="prise__title">а4 формат</div>
                    <div class="number">12 000 с</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col col-lg-4 col-md-6 col-mx-12">
            <div class="card"> 
              <div class="card__box"> 
                <div class="card__item"> 
                  <div class="title">Магия фэнтези</div>
                  <button><img class="imgH" src="@/assets/img/heartS.svg" alt=""/></button>
                </div>
                <div class="img"><img src="@/assets/img/product.jpg" alt=""/>
                  <div class="author">Никита Семин</div>
                </div>
                <div class="productName">Скайлор. Стажеры</div>
                <div class="card__items">
                  <div class="prise"> 
                    <div class="prise__title">цветной</div>
                    <div class="number">12 000 с</div>
                  </div>
                  <div class="prise"> 
                    <div class="prise__title">ч\б</div>
                    <div class="number">12 000 с</div>
                  </div>
                  <div class="prise"> 
                    <div class="prise__title">а3 формат</div>
                    <div class="number">12 000 с</div>
                  </div>
                  <div class="prise"> 
                    <div class="prise__title">а4 формат</div>
                    <div class="number">12 000 с</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col col-lg-4 col-md-6 col-mx-12">
            <div class="card"> 
              <div class="card__box"> 
                <div class="card__item"> 
                  <div class="title">Магия фэнтези</div>
                  <button><img class="imgH" src="@/assets/img/heartS.svg" alt=""/></button>
                </div>
                <div class="img"><img src="@/assets/img/product.jpg" alt=""/>
                  <div class="author">Никита Семин</div>
                </div>
                <div class="productName">Скайлор. Стажеры</div>
                <div class="card__items">
                  <div class="prise"> 
                    <div class="prise__title">цветной</div>
                    <div class="number">12 000 с</div>
                  </div>
                  <div class="prise"> 
                    <div class="prise__title">ч\б</div>
                    <div class="number">12 000 с</div>
                  </div>
                  <div class="prise"> 
                    <div class="prise__title">а3 формат</div>
                    <div class="number">12 000 с</div>
                  </div>
                  <div class="prise"> 
                    <div class="prise__title">а4 формат</div>
                    <div class="number">12 000 с</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col col-lg-4 col-md-6 col-mx-12">
            <div class="card"> 
              <div class="card__box"> 
                <div class="card__item"> 
                  <div class="title">Магия фэнтези</div>
                  <button><img class="imgH" src="@/assets/img/heartS.svg" alt=""/></button>
                </div>
                <div class="img"><img src="@/assets/img/product.jpg" alt=""/>
                  <div class="author">Никита Семин</div>
                </div>
                <div class="productName">Скайлор. Стажеры</div>
                <div class="card__items">
                  <div class="prise"> 
                    <div class="prise__title">цветной</div>
                    <div class="number">12 000 с</div>
                  </div>
                  <div class="prise"> 
                    <div class="prise__title">ч\б</div>
                    <div class="number">12 000 с</div>
                  </div>
                  <div class="prise"> 
                    <div class="prise__title">а3 формат</div>
                    <div class="number">12 000 с</div>
                  </div>
                  <div class="prise"> 
                    <div class="prise__title">а4 формат</div>
                    <div class="number">12 000 с</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col col-lg-4 col-md-6 col-mx-12">
            <div class="card"> 
              <div class="card__box"> 
                <div class="card__item"> 
                  <div class="title">Магия фэнтези</div>
                  <button><img class="imgH" src="@/assets/img/heartS.svg" alt=""/></button>
                </div>
                <div class="img"><img src="@/assets/img/product.jpg" alt=""/>
                  <div class="author">Никита Семин</div>
                </div>
                <div class="productName">Скайлор. Стажеры</div>
                <div class="card__items">
                  <div class="prise"> 
                    <div class="prise__title">цветной</div>
                    <div class="number">12 000 с</div>
                  </div>
                  <div class="prise"> 
                    <div class="prise__title">ч\б</div>
                    <div class="number">12 000 с</div>
                  </div>
                  <div class="prise"> 
                    <div class="prise__title">а3 формат</div>
                    <div class="number">12 000 с</div>
                  </div>
                  <div class="prise"> 
                    <div class="prise__title">а4 формат</div>
                    <div class="number">12 000 с</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col col-lg-4 col-md-6 col-mx-12">
            <div class="card"> 
              <div class="card__box"> 
                <div class="card__item"> 
                  <div class="title">Магия фэнтези</div>
                  <button><img class="imgH" src="@/assets/img/heartS.svg" alt=""/></button>
                </div>
                <div class="img"><img src="@/assets/img/product.jpg" alt=""/>
                  <div class="author">Никита Семин</div>
                </div>
                <div class="productName">Скайлор. Стажеры</div>
                <div class="card__items">
                  <div class="prise"> 
                    <div class="prise__title">цветной</div>
                    <div class="number">12 000 с</div>
                  </div>
                  <div class="prise"> 
                    <div class="prise__title">ч\б</div>
                    <div class="number">12 000 с</div>
                  </div>
                  <div class="prise"> 
                    <div class="prise__title">а3 формат</div>
                    <div class="number">12 000 с</div>
                  </div>
                  <div class="prise"> 
                    <div class="prise__title">а4 формат</div>
                    <div class="number">12 000 с</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col col-lg-4 col-md-6 col-mx-12">
            <div class="card"> 
              <div class="card__box"> 
                <div class="card__item"> 
                  <div class="title">Магия фэнтези</div>
                  <button><img class="imgH" src="@/assets/img/heartS.svg" alt=""/></button>
                </div>
                <div class="img"><img src="@/assets/img/product.jpg" alt=""/>
                  <div class="author">Никита Семин</div>
                </div>
                <div class="productName">Скайлор. Стажеры</div>
                <div class="card__items">
                  <div class="prise"> 
                    <div class="prise__title">цветной</div>
                    <div class="number">12 000 с</div>
                  </div>
                  <div class="prise"> 
                    <div class="prise__title">ч\б</div>
                    <div class="number">12 000 с</div>
                  </div>
                  <div class="prise"> 
                    <div class="prise__title">а3 формат</div>
                    <div class="number">12 000 с</div>
                  </div>
                  <div class="prise"> 
                    <div class="prise__title">а4 формат</div>
                    <div class="number">12 000 с</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col col-lg-4 col-md-6 col-mx-12">
            <div class="card"> 
              <div class="card__box"> 
                <div class="card__item"> 
                  <div class="title">Магия фэнтези</div>
                  <button><img class="imgH" src="@/assets/img/heartS.svg" alt=""/></button>
                </div>
                <div class="img"><img src="@/assets/img/product.jpg" alt=""/>
                  <div class="author">Никита Семин</div>
                </div>
                <div class="productName">Скайлор. Стажеры</div>
                <div class="card__items">
                  <div class="prise"> 
                    <div class="prise__title">цветной</div>
                    <div class="number">12 000 с</div>
                  </div>
                  <div class="prise"> 
                    <div class="prise__title">ч\б</div>
                    <div class="number">12 000 с</div>
                  </div>
                  <div class="prise"> 
                    <div class="prise__title">а3 формат</div>
                    <div class="number">12 000 с</div>
                  </div>
                  <div class="prise"> 
                    <div class="prise__title">а4 формат</div>
                    <div class="number">12 000 с</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <About />
    <News />
    <Location />
  </div>
</template>

<script>
import About from '../components/Home/About.vue'
import News from '../components/Home/News.vue'
import Location from '../components/Location.vue'
export default {
    components: {
        News, Location, About
    },
    data() {
        return {
            options: {
                autoplay:true,
                interval:4000,
                perPage: 1,
                pauseOnHover:false,
                arrows:false,
                paginations:false
            },
        }
    },
}
</script>

<style>

</style>