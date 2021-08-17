<template>
    <div class="slider">
        <div class="container">
            <div class="slider__item">
                <div class="news">Новости и акции</div>
                <div class="items">
                    <div class="allNews">все новости</div><a href="#"><img src="@/assets/img/rightS.png" alt="" /></a>
                </div>
            </div>
            <splide :options="options">
                <splide-slide v-for='a of 6' :key='a'>
                    <div class="col-lg-12">
                        <a href="#">
                            <div class="product__boxs">
                                <div class="product__img">
                                    <img src="@/assets/img/slider1.jpg" alt="" />
                                </div>
                                <div class="product__minBox">
                                    <div class="product__year">с 15 июня по 20 июля</div>
                                    <div class="product__sale">Летняя распродажа до 50%</div>
                                </div>
                            </div>
                        </a>
                    </div>
                </splide-slide>
            </splide>

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                options: {
                    autoplay: true,
                    interval: 4000,
                    perPage: 3,
                    pauseOnHover: false,
                    arrows: false,
                    paginations: false
                },
            }
        },
    }
</script>

<style>

</style>