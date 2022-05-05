<template>
  <div class="feed">
    <div class="feedback pt-3 pr-3 pb-4 pl-4 mb-3" :class="{'positive': item.isPositive}" v-for="item in reviews" :key="item.id">
      <div class="feedback__row flex justify-between mb-4">
        <div class="feedback__user flex items-center">
          <img class="h-7 mr-3" :src="require(`~/assets/images/people/${item.id}.png`)" alt="">
          <span>{{item.name}}</span>
          <img class="h-6 ml-3" v-if="item.isVerified" src="~/assets/images/verified.svg" alt="">
        </div>
        <div class="feedback__criteria px-2 flex items-center" 
          :class="{'positive': item.isPositive}"
        >
          {{item.isPositive ? 'Положительный' : 'Отрицательный'}}
        </div>
      </div>
      <p class="feedback__text mb-1">{{item.text}}</p>
      <div class="flex justify-end items-center feedback__bottom">
        <span class="feedback__date">{{item.date}}</span>
        &nbsp;|&nbsp;
        <span class="feedback__occupation">{{item.occupation}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState([
        'reviews'
      ])
    }
  }
</script>

<style lang="scss" scoped>
  .feed {

    .feedback {
      border: 2px solid #FFA39E;
      box-sizing: border-box;
      border-radius: 10px;

      &.positive {
        border: 2px solid #B7EB8F;
        box-sizing: border-box;
        border-radius: 10px;
      }

      &__criteria {
        font-size: 12px;
        line-height: 20px;
        color: #F5222D;
        background: #FFF1F0;
        border: 1px solid #FFA39E;
        box-sizing: border-box;
        border-radius: 2px;

        &.positive {
          color: #52C41A;
          border: 1px solid #B7EB8F;
          background: #F6FFED;
        }
      }

      &__bottom,&__date,&__occupation {
        font-size: 14px;
        line-height: 16px;
        color: #8C8C8C;
      }
    }


  }
</style>