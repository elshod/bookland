<template>
  <div class="personalCabinet"> 
      <div class="container"> 
        <div class="personalCabinet__title">Личный кабинет</div>
        <div class="link"> 
            <router-link to="/">Главная -</router-link>
            <a href="#">Доставка и оплата</a></div>
        <div class="personalCabinet__menu"> 
          <div class="menu isActive myOrder" data-id="myOrder">МОИ ЗАКАЗЫ </div>
          <div class="menu myFavorites" data-id="myFavorites">МОИ ИЗБРАННЫЕ <span>(31)</span></div>
          <div class="menu editFrofil" data-id="editFrofil">EDIT PROFILE<span>( 5)</span></div>
        </div>
        <div class="personalCabinet__item myOrder isShow">
          <div class="title">1</div>
          <div class="col-lg-12"> 
            <div class="boxes">
              <div class="personalCabinet__item--title">Заказ №52345231</div>
              <div class="item"> 
                <div class="item__p">Кризис в красной зоне: Самая смертоносная вспышка Эболы и эпидемии будущего | Престон РичардПриемная мама: Как я себе это представляла и как все оказалось на самом деле | Соколова ЯнаПоток: Психология оптимального переживания | Чиксентмихайи МихайТонкое искусство пофигизма: Парадоксальный способ жить счастливо | Мэнсон МаркКак разговаривать с кем угодно, когда угодно и где угодно | Кинг ЛарриЯсно, понятно: Как доносить мысли и убеждать людей с помощью слов | Ильяхов Максим</div>
                <div class="item__sum"> 
                  <div class="item__title">Итоговая цена :<span> 668 000 сум </span></div>
                  <div class="payMent"> 
                    <div class="title">Оплата:</div>
                    <div class="free">наличными</div>
                  </div>
                  <div class="orderB"> 
                    <div class="title">Статус заказа:</div>
                    <div class="orders">заказ доставлен</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12"> 
            <div class="boxes">
              <div class="personalCabinet__item--title">Заказ №52345231</div>
              <div class="item"> 
                <div class="item__p">Кризис в красной зоне: Самая смертоносная вспышка Эболы и эпидемии будущего | Престон РичардПриемная мама: Как я себе это представляла и как все оказалось на самом деле | Соколова ЯнаПоток: Психология оптимального переживания | Чиксентмихайи МихайТонкое искусство пофигизма: Парадоксальный способ жить счастливо | Мэнсон МаркКак разговаривать с кем угодно, когда угодно и где угодно | Кинг ЛарриЯсно, понятно: Как доносить мысли и убеждать людей с помощью слов | Ильяхов Максим</div>
                <div class="item__sum"> 
                  <div class="item__title">Итоговая цена :<span> 668 000 сум </span></div>
                  <div class="payMent"> 
                    <div class="title">Оплата:</div>
                    <div class="free">наличными</div>
                  </div>
                  <div class="orderB"> 
                    <div class="title">Статус заказа:</div>
                    <div class="orders">заказ доставлен</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12"> 
            <div class="boxes">
              <div class="personalCabinet__item--title">Заказ №52345231</div>
              <div class="item"> 
                <div class="item__p">Кризис в красной зоне: Самая смертоносная вспышка Эболы и эпидемии будущего | Престон РичардПриемная мама: Как я себе это представляла и как все оказалось на самом деле | Соколова ЯнаПоток: Психология оптимального переживания | Чиксентмихайи МихайТонкое искусство пофигизма: Парадоксальный способ жить счастливо | Мэнсон МаркКак разговаривать с кем угодно, когда угодно и где угодно | Кинг ЛарриЯсно, понятно: Как доносить мысли и убеждать людей с помощью слов | Ильяхов Максим</div>
                <div class="item__sum"> 
                  <div class="item__title">Итоговая цена :<span> 668 000 сум </span></div>
                  <div class="payMent"> 
                    <div class="title">Оплата:</div>
                    <div class="free">наличными</div>
                  </div>
                  <div class="orderB"> 
                    <div class="title">Статус заказа:</div>
                    <div class="orders">заказ доставлен</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="personalCabinet__item myFavorites">
          <div class="title">2</div>
          <div class="col-lg-12"> 
            <div class="boxes">
              <div class="personalCabinet__item--title">Заказ №52345231</div>
              <div class="item"> 
                <div class="item__p">Кризис в красной зоне: Самая смертоносная вспышка Эболы и эпидемии будущего | Престон РичардПриемная мама: Как я себе это представляла и как все оказалось на самом деле | Соколова ЯнаПоток: Психология оптимального переживания | Чиксентмихайи МихайТонкое искусство пофигизма: Парадоксальный способ жить счастливо | Мэнсон МаркКак разговаривать с кем угодно, когда угодно и где угодно | Кинг ЛарриЯсно, понятно: Как доносить мысли и убеждать людей с помощью слов | Ильяхов Максим</div>
                <div class="item__sum"> 
                  <div class="item__title">Итоговая цена :<span> 668 000 сум </span></div>
                  <div class="payMent"> 
                    <div class="title">Оплата:</div>
                    <div class="free">наличными</div>
                  </div>
                  <div class="orderB"> 
                    <div class="title">Статус заказа:</div>
                    <div class="orders">заказ доставлен</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12"> 
            <div class="boxes">
              <div class="personalCabinet__item--title">Заказ №52345231</div>
              <div class="item"> 
                <div class="item__p">Кризис в красной зоне: Самая смертоносная вспышка Эболы и эпидемии будущего | Престон РичардПриемная мама: Как я себе это представляла и как все оказалось на самом деле | Соколова ЯнаПоток: Психология оптимального переживания | Чиксентмихайи МихайТонкое искусство пофигизма: Парадоксальный способ жить счастливо | Мэнсон МаркКак разговаривать с кем угодно, когда угодно и где угодно | Кинг ЛарриЯсно, понятно: Как доносить мысли и убеждать людей с помощью слов | Ильяхов Максим</div>
                <div class="item__sum"> 
                  <div class="item__title">Итоговая цена :<span> 668 000 сум </span></div>
                  <div class="payMent"> 
                    <div class="title">Оплата:</div>
                    <div class="free">наличными</div>
                  </div>
                  <div class="orderB"> 
                    <div class="title">Статус заказа:</div>
                    <div class="orders">заказ доставлен</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12"> 
            <div class="boxes">
              <div class="personalCabinet__item--title">Заказ №52345231</div>
              <div class="item"> 
                <div class="item__p">Кризис в красной зоне: Самая смертоносная вспышка Эболы и эпидемии будущего | Престон РичардПриемная мама: Как я себе это представляла и как все оказалось на самом деле | Соколова ЯнаПоток: Психология оптимального переживания | Чиксентмихайи МихайТонкое искусство пофигизма: Парадоксальный способ жить счастливо | Мэнсон МаркКак разговаривать с кем угодно, когда угодно и где угодно | Кинг ЛарриЯсно, понятно: Как доносить мысли и убеждать людей с помощью слов | Ильяхов Максим</div>
                <div class="item__sum"> 
                  <div class="item__title">Итоговая цена :<span> 668 000 сум </span></div>
                  <div class="payMent"> 
                    <div class="title">Оплата:</div>
                    <div class="free">наличными</div>
                  </div>
                  <div class="orderB"> 
                    <div class="title">Статус заказа:</div>
                    <div class="orders">заказ доставлен</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="personalCabinet__item editFrofil">
          <div class="title">3</div>
          <div class="col-lg-12"> 
            <div class="boxes">
              <div class="personalCabinet__item--title">Заказ №52345231</div>
              <div class="item"> 
                <div class="item__p">Кризис в красной зоне: Самая смертоносная вспышка Эболы и эпидемии будущего | Престон РичардПриемная мама: Как я себе это представляла и как все оказалось на самом деле | Соколова ЯнаПоток: Психология оптимального переживания | Чиксентмихайи МихайТонкое искусство пофигизма: Парадоксальный способ жить счастливо | Мэнсон МаркКак разговаривать с кем угодно, когда угодно и где угодно | Кинг ЛарриЯсно, понятно: Как доносить мысли и убеждать людей с помощью слов | Ильяхов Максим</div>
                <div class="item__sum"> 
                  <div class="item__title">Итоговая цена :<span> 668 000 сум </span></div>
                  <div class="payMent"> 
                    <div class="title">Оплата:</div>
                    <div class="free">наличными</div>
                  </div>
                  <div class="orderB"> 
                    <div class="title">Статус заказа:</div>
                    <div class="orders">заказ доставлен</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12"> 
            <div class="boxes">
              <div class="personalCabinet__item--title">Заказ №52345231</div>
              <div class="item"> 
                <div class="item__p">Кризис в красной зоне: Самая смертоносная вспышка Эболы и эпидемии будущего | Престон РичардПриемная мама: Как я себе это представляла и как все оказалось на самом деле | Соколова ЯнаПоток: Психология оптимального переживания | Чиксентмихайи МихайТонкое искусство пофигизма: Парадоксальный способ жить счастливо | Мэнсон МаркКак разговаривать с кем угодно, когда угодно и где угодно | Кинг ЛарриЯсно, понятно: Как доносить мысли и убеждать людей с помощью слов | Ильяхов Максим</div>
                <div class="item__sum"> 
                  <div class="item__title">Итоговая цена :<span> 668 000 сум </span></div>
                  <div class="payMent"> 
                    <div class="title">Оплата:</div>
                    <div class="free">наличными</div>
                  </div>
                  <div class="orderB"> 
                    <div class="title">Статус заказа:</div>
                    <div class="orders">заказ доставлен</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12"> 
            <div class="boxes">
              <div class="personalCabinet__item--title">Заказ №52345231</div>
              <div class="item"> 
                <div class="item__p">Кризис в красной зоне: Самая смертоносная вспышка Эболы и эпидемии будущего | Престон РичардПриемная мама: Как я себе это представляла и как все оказалось на самом деле | Соколова ЯнаПоток: Психология оптимального переживания | Чиксентмихайи МихайТонкое искусство пофигизма: Парадоксальный способ жить счастливо | Мэнсон МаркКак разговаривать с кем угодно, когда угодно и где угодно | Кинг ЛарриЯсно, понятно: Как доносить мысли и убеждать людей с помощью слов | Ильяхов Максим</div>
                <div class="item__sum"> 
                  <div class="item__title">Итоговая цена :<span> 668 000 сум </span></div>
                  <div class="payMent"> 
                    <div class="title">Оплата:</div>
                    <div class="free">наличными</div>
                  </div>
                  <div class="orderB"> 
                    <div class="title">Статус заказа:</div>
                    <div class="orders">заказ доставлен</div>
                  </div>
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

}
</script>

<style>

</style>