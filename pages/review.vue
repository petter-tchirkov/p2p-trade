<template>
  <div class="review pl-56 w-full max-h-screen h-full">
    <header class="review__header flex justify-between p-3 pl-8 border-b-2">
      <h1>Отзывы о {{users.name}}</h1>
      <UserPanel/>
    </header>
    <div class="review__content">
      <div class="left-side">
      <div class="review__user user-info pt-5 pl-11 border-r-2 border-b-2">
        <div class="user-info__top flex items-center mb-5">
          <img class="mr-5" :src="require(`~/assets/images/people/${users.id}.png`)" alt="">
          <h2 class="mr-3">{{users.name}}</h2>
          <img v-if="users.status === 'verified'" src="~/assets/images/verified.svg" alt="">
        </div>
        <div class="user-info__grid">
          <div class="user-info__row mb-4">
            <span class="user-info__criteria">Статус</span>
            <span class="user-info__status w-fit px-2">
              {{users.status === 'verified' ? 'Верифицирован' : 'Не верифицирован'}}
            </span>
          </div>
          <div class="user-info__row mb-4">
            <span class="user-info__criteria">Был на сайте</span>
            <span :class="users.isOnline ? 'user-info__is-online text-green-400' : 'user-info__is-online text-red-600'">
              {{users.isOnline ? 'Online' : 'Offline'}}
            </span>
          </div>
          <div class="user-info__row mb-4">
            <span class="user-info__criteria">О себе</span>
            <span class="user-info__description pr-12">
              {{users.description}}
            </span>
          </div>
          <div class="user-info__row mb-4">
            <span class="user-info__criteria">На проекте</span>
            <span class="user-info__description">
              {{users.since}}
            </span>
          </div>
          <div class="user-info__row mb-4">
            <span class="user-info__criteria">Активных заявок</span>
            <span class="user-info__description">
              {{users.activeOrders ? users.activeOrders.length : 'Нет'}}
            </span>
          </div>
          <div class="user-info__row mb-4">
            <span class="user-info__criteria">Среднее время отправки депозита</span>
            <span class="user-info__description">
              {{users.averageDepositTime}} мин
            </span>
          </div>
          <div class="user-info__row mb-4">
            <span class="user-info__criteria">В черном списке у</span>
            <span class="user-info__description">
              {{users.blackListed}} пользователей
            </span>
          </div>
        </div>
      </div>
      <div class="review__reviews reviews pl-11 py-3 border-r-2 border-b-2">
        <p class="mb-1">Получил <b>1029</b> <span class="positive">положительных отзывов</span> от <b>75</b> клиентов</p>
        <div class="reviews__list">
          <span class="reviews__criteria mr-11">Из них</span>
          <span class="reviews__item"><b>60</b> верефицировано</span>
          <span class="divider mx-4">|</span>
          <span class="reviews__item"><b>15</b> не верефицировано</span>
        </div>
      </div>
      <div class="review__reviews reviews pl-11 py-3 border-r-2 border-b-2">
        <p class="mb-1">Получил <b>18</b> <span class="negative">отрицательных отзывов</span> от <b>17</b> клиентов</p>
        <div class="reviews__list">
          <span class="reviews__criteria mr-11">Из них</span>
          <span class="reviews__item"><b>2</b> верефицировано</span>
          <span class="divider mx-4">|</span>
          <span class="reviews__item"><b>1</b> не верефицировано</span>
        </div>
      </div>
      <Footer class="border-r-2 flex items-center p-0" />
    </div>
    <div class="right-side comment w-full overflow-scroll">
      <div class="comment__header px-6 py-3 flex justify-between relative border-b-2">
        <div class="comment__values flex">
            <h3 class="mr-4">Отзывы</h3>
          <div class="comment__rating mr-2">
            <img src="~/assets/images/star.svg" alt="">
            <img src="~/assets/images/star.svg" alt="">
            <img src="~/assets/images/star.svg" alt="">
            <img src="~/assets/images/half-star.svg" alt="">
          </div>
          <div class="comment__rating-stat mr-2"><b>4</b>.23</div>
          <div class="comment__rating-votes mr-3">(1029)</div>
          <img src="~/assets/images/question.svg" alt="" class="comment__rating-question">
        </div>
        <button class="comment__sort flex items-center gap-1 group" @click="isDropdownShown = !isDropdownShown">
          <p>Все отзывы</p>
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.29289 5.29289L0.707107 1.70711C0.0771417 1.07714 0.523308 -6.65859e-08 1.41421 -1.05529e-07L8.58579 -4.19008e-07C9.47669 -4.57951e-07 9.92286 1.07714 9.29289 1.70711L5.70711 5.29289C5.31658 5.68342 4.68342 5.68342 4.29289 5.29289Z" fill="#B0B4FF"/>
          </svg>
        </button>
        <div v-show="isDropdownShown" class="comment__options absolute top-10 right-0 bg-white">
          <ul class="text-left border rounded p-1">
            <li class="text-indigo-500">Все отзывы</li>
            <li class="text-green-500">Положительные отзывы</li>
            <li class="text-red-500">Отрицательные отзывы</li>
          </ul>
        </div>
      </div>
      <div class="comment__feed py-4 pl-8 pr-4 overflow-scroll">
        <Review/>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
  export default {
    name: 'ReviewPage',
    data() {
      return {
        // user: {
        //   id: 1,
        //   name: 'Floyd Miles',
        //   status: 'verified',
        //   isOnline: true,
        //   description: 'Я всегда онлайн. Меняю крупные суммы на Сбербанк, Яндекс, Киви и другие валты в рублях. ',
        //   since: 'с 10 октября 2021',
        //   activeOrders: 0,
        //   averageDepositTime: 15,
        //   blackListed: 2
        // },
        isDropdownShown: false,
      }
    },
    computed: {
      ...mapState([
        'users'
      ])
    }
  }
</script>

<style lang="scss" scoped>

  .left-side {
    max-width: 552px;
    width: 100%;
  }

  .review {
    &__header {
      font-weight: bold;
      font-size: 20px;
      line-height: 23px;
      color: #5156A6;
    }

    &__content {
      display: flex;
    }

    .reviews {

      p {
        font-size: 14px;
        line-height: 22px;

        .positive {
          color: #52C41A;
        }

        .negative {
          color: #F5222D;
        }
      }

      &__criteria {
        color: #8C8C8C;
        font-size: 14px;
        line-height: 16px;
      }

      &__item {
        font-size: 14px;
        line-height: 16px;
        color: #262626;
      }
    }
  }

  .user-info {
    &__top {
      img {
        width: 49px;
        height: 49px;
      }

      h2 {
        font-size: 28px;
        line-height: 33px;
      }
    }

    &__grid {
      display: grid;
      grid-template-columns: 1fr;
    }

    &__row {
      display: grid;
      gap: 1.25rem;
      grid-template-columns: 127px auto;
    }

    &__criteria {
      font-size: 14px;
      line-height: 16px;
      color: #8C8C8C;
    }

    &__status {
      border: 1px solid #ADC6FF;
      box-sizing: border-box;
      border-radius: 2px;
      color: #2F54EB;
      background: #F0F5FF;
    }

    &__description {
      font-size: 14px;
      line-height: 140%;
    }
  }

  .comment {
    max-height: 711px;
    height: 100%;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    &__rating {
      display: flex;
    }

    &__header {
      display: flex;
    }
    &__sort {

      p {
        font-size: 15px;
        line-height: 18px;
        color: #747AE7;
      }
    }
  }
</style>