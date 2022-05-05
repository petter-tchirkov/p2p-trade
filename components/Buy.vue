<template>
  <div class="s-table">
    <div class="buy-table__header">
      <div class="buy-table__cell">Пользователь</div>
      <div class="buy-table__cell">Курс</div>
      <div class="buy-table__cell">Сумма на продажу</div>
      <div class="buy-table__cell">Рейтинг</div>
    </div>
    <div class="buy-table" v-for="user in this.users" :key="user.id">
      <div class="buy-table__body">
        <div class="buy-table__col user" >
          <div class="buy-table__cell user__item">
            <div class="left">
              <a href="">
                <img :src="require(`~/assets/images/people/${user.id}.png`)" alt="">
                <span>{{user.name}}</span>
              </a>
            </div>
            <div class="right">
              <img :src="require(`~/assets/images/currencies/${user.trade.from}.svg`)" alt="">
              <img src="~/assets/images/arrow-right.svg" alt="" />
              <img :src="require(`~/assets/images/currencies/${user.trade.to}.svg`)" alt="">
            </div>
          </div>
        </div>
        <div class="buy-table__col course">
          <div class="buy-table__cell course__item">
            <span>{{user.course}} : 1</span>
          </div>
        </div>
        <div className="buy-table__col sum"> 
          <div class="buy-table__cell sum__item">
            <span>$ {{user.sum.split(".")[0]}}</span>.
            <span class="coins">{{user.sum.split(".")[1]}}</span>
          </div>
        </div>
        <div className="buy-table__col rating">
          <div class="buy-table__cell rating__item">
            <img src="~/assets/images/star.svg" alt="" />
            <span class="rating__number">{{user.rating.number.split(".")[0]}}</span>
            <span class="rating__remainder">{{user.rating.number.split(".")[1]}}</span>
            <span class="rating__votes">({{user.rating.votes}})</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
  export default {
    computed: {
      ...mapState([
        'users'
      ])
    }
  }
</script>

<style lang="scss" scoped>
  .buy {

  &-table {
    
    &__header {
      display: grid;
      grid-template-columns: 4fr 1.5fr 1.5fr 1fr;

      .buy-table__cell {
        font-size: 12px;
        line-height: 14px;
        color: #8C8C8C;
        padding-left: 30px;
        border-left: none;
        border-right: none;
        display: flex;
        align-items: center;
      }
    }

    &__body {
      display: grid;
      grid-template-columns: 4fr 1.5fr 1.5fr 1fr;
    }

    &__cell {
      border: 1px solid #CCCFF9;
      height: 45px;
    }
  }
}

.user {

  &__item {
    display: flex;
    justify-content: space-between;
    padding-right: 0.75rem;
    padding-left: 1.875rem;

    .left,.right {
      display: flex;
      align-items: center;
      
      a {
        text-decoration: none;
        display: flex;
        align-items: center;
        color: #000;
      }

      span {
        margin-left: 0.75rem;
      }
    }
  }
}

.course {

  &__item {
    padding-right: 1.6125rem;
    display: flex;
    align-items: center;
    justify-content: end;

    span {
      font-size: 18px;
      line-height: 21px;
      color: #000;
    }
  }
}


.sum {

  &__item {
    padding-right: 1.6125rem;
    display: flex;
    align-items: center;
    justify-content: end;

    span {
      font-size: 18px;
      line-height: 21px;
      color: #000;
    }
    span.coins {
      color: #8C8C8C;
    }
  }
}

.rating {

  &__item {
    display: flex;
    align-items: center;
    padding-left: 1.5rem;
  }

  &__number {
    font-size: 18px;
    line-height: 21px;
    font-weight: bold;
  }

  &__remainder {
    font-size: 16px;
    line-height: 21px;
  }

  &__votes {
    font-size: 14px;
    line-height: 16px;
    color: #8C8C8C;
    margin-left: 0.5rem;
  }
}

.reputation {
  
  &__item {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  &__pros {
    color: #389E0D;
    font-size: 14px;
    line-height: 16px;
  }

  &__cons {
    color: #CF1322;
    font-size: 14px;
    line-height: 16px;
  }
}


</style>