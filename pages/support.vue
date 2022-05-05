<template>
  <div class="support pl-56 w-full max-h-screen h-full mb-24">
    <header class="support__header flex justify-between items-center py-3 pr-4 pl-8 border-b-2 mb-4">
      <h1>Поддержка</h1>
      <UserPanel/>
    </header>
    <main class="support__main pl-8 mb-8">
      <h2 class="py-4">Некоторые ответы по вашему вопросу</h2>
      <div class="support__content" v-for="item in support" :key="item.id">
        <details class="support__details" @click="isDetailsOpened =!isDetailsOpened">
          <summary class="flex justify-between items-center py-4 border-t-2 cursor-pointer">{{item.summary}}
            <svg v-if="!isDetailsOpened" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.3125 11.25H12.75V7.6875C12.75 7.58437 12.6656 7.5 12.5625 7.5H11.4375C11.3344 7.5 11.25 7.58437 11.25 7.6875V11.25H7.6875C7.58437 11.25 7.5 11.3344 7.5 11.4375V12.5625C7.5 12.6656 7.58437 12.75 7.6875 12.75H11.25V16.3125C11.25 16.4156 11.3344 16.5 11.4375 16.5H12.5625C12.6656 16.5 12.75 16.4156 12.75 16.3125V12.75H16.3125C16.4156 12.75 16.5 12.6656 16.5 12.5625V11.4375C16.5 11.3344 16.4156 11.25 16.3125 11.25Z" fill="#747AE7"/>
              <path d="M12 1.5C6.20156 1.5 1.5 6.20156 1.5 12C1.5 17.7984 6.20156 22.5 12 22.5C17.7984 22.5 22.5 17.7984 22.5 12C22.5 6.20156 17.7984 1.5 12 1.5ZM12 20.7188C7.18594 20.7188 3.28125 16.8141 3.28125 12C3.28125 7.18594 7.18594 3.28125 12 3.28125C16.8141 3.28125 20.7188 7.18594 20.7188 12C20.7188 16.8141 16.8141 20.7188 12 20.7188Z" fill="#747AE7"/>
            </svg>
            <svg v-else width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1104_24172)">
              <path d="M20.5797 19.519L18.0607 16.9999L20.5797 14.4809C20.6526 14.408 20.6526 14.2886 20.5797 14.2157L19.7842 13.4202C19.7113 13.3473 19.592 13.3473 19.5191 13.4202L17 15.9393L14.4809 13.4202C14.408 13.3473 14.2887 13.3473 14.2158 13.4202L13.4203 14.2157C13.3474 14.2886 13.3474 14.408 13.4203 14.4809L15.9393 16.9999L13.4203 19.519C13.3474 19.5919 13.3474 19.7113 13.4203 19.7842L14.2158 20.5797C14.2887 20.6526 14.408 20.6526 14.4809 20.5797L17 18.0606L19.5191 20.5797C19.592 20.6526 19.7113 20.6526 19.7842 20.5797L20.5797 19.7842C20.6526 19.7113 20.6526 19.5919 20.5797 19.519Z" fill="#747AE7"/>
              <path d="M24.4246 9.57526C20.3245 5.47514 13.6755 5.47514 9.57538 9.57526C5.47526 13.6754 5.47526 20.3244 9.57538 24.4245C13.6755 28.5246 20.3245 28.5246 24.4246 24.4245C28.5247 20.3244 28.5247 13.6754 24.4246 9.57526ZM10.8349 23.165C7.43086 19.7609 7.43086 14.2388 10.8349 10.8348C14.239 7.43073 19.761 7.43073 23.1651 10.8348C26.5691 14.2388 26.5691 19.7609 23.1651 23.165C19.761 26.569 14.239 26.569 10.8349 23.165Z" fill="#747AE7"/>
              </g>
              <defs>
              <clipPath id="clip0_1104_24172">
              <rect width="24" height="24" fill="white" transform="translate(17 0.0292969) rotate(45)"/>
              </clipPath>
              </defs>
            </svg>
          </summary>
          <p class="mb-4">{{item.detail}}</p>
        </details>
      </div>
    </main>
    <form action="#" class="support__form pl-8 w-2/3 border-b-2">
      <h2 class="mb-7">Написать в поддержку</h2>
      <div class="support__select mb-5">
        <label class="flex items-center justify-between" for="">
          Тема письма
          <select class="py-1 pr-8 pl-3" name="" id="">
            <option value="">Не получается отправить перевод в рублях</option>
            <option value="">Не получается отправить перевод в BTC</option>
        </select>
        </label>
      </div>
      <div class="support__email mb-5">
        <label for="" class="flex items-center justify-between">
          Почта
          <input class="py-1 pr-8 pl-3" type="email" placeholder="some.example@gmail.com">
        </label>
      </div>
      <div class="support__text mb-4">
        <label for="" class="flex items-start justify-between">
          Сообщение
          <textarea class="py-1 pr-8 pl-3"/>
        </label>
      </div>
      <input type="submit" class="support__submit py-3 px-8 w-min  mb-24" value="Отправить вопрос">
    </form>
    <Footer/>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'Support',
    data() {
      return {
        isDetailsOpened: false
      }
    },
    computed: {
      ...mapState([
        'support'
      ]),
    },
  }
</script>

<style lang="scss" scoped>
  .support {
    h1 {
      font-weight: bold;
      font-size: 20px;
      line-height: 23px;
      color: #5156A6;
    }

    h2 {
      font-weight: bold;
      font-size: 20px;
      line-height: 23px;
    }

    input[type="email"],select,textarea {
      max-width: 484px;
      width: 100%;
      color: #595959;
    }

    textarea {
      height: 118px;
      background: none;
      border: 1px solid #D9D9D9;
      box-sizing: border-box;
      border-radius: 2px;
      resize: none;
    }

    label {
      color: #8C8C8C;
      font-size: 14px;
      line-height: 16px;
    }

    input[type="submit"] {
      margin-left: 206px;
      cursor: pointer;
    }

    &__main {
      max-width: 730px;
    }

    &__details {
      font-size: 16px;
      line-height: 22px;
      color: #000000;

      summary {
        color: #656AC5;
        list-style: none;

        &::-webkit-details-marker {
          display: none;
        }
      }
    }

    &__select {
      position: relative;
      margin-bottom: 1rem;

      &:after {
        content: '';
        display: block;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 6px 5.5px 0 5.5px;
        border-color: #8C8C8C transparent transparent transparent;
        position: absolute;
        top: 50%;
        right: 1rem;
      }

      select {
        background: none;
        border: 1px solid #D9D9D9;
        box-sizing: border-box;
        border-radius: 2px;
        appearance: none;
      }
    }

    &__email {
      input {
        background: none;
        border: 1px solid #D9D9D9;
        box-sizing: border-box;
        border-radius: 2px;
        appearance: none;
      }
    }

    &__text {
      textarea {
        background: none;
        border: 1px solid #D9D9D9;
        box-sizing: border-box;
        border-radius: 2px;
        appearance: none;
      }
    }

    &__submit {
      border: 1px solid #656AC5;
      border-radius: 4px;
      font-size: 18px;
      line-height: 18px;
      color: #656AC5;
      background: none;
    }
  }
</style>