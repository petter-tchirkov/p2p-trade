<template>
  <div class="wrapper pl-56">
    <Header />
    <div class="main">
      <div class="subheader">
        <div class="subheader__btn">
          <div class="subheader__plus">+</div>
          <button class="subheader__create">
            Создать объявление
          </button>
          <div class="subheader__arrow">
            <span></span>
          </div>
        </div>
        <div class="subheader__sort sort">
          <ul class="sort__list">
            <li
              :class="
                isCurrenciesBuyShown
                  ? 'has-dropdown sort__item currency relative flex items-center opened'
                  : 'has-dropdown sort__item currency relative flex items-center'
              "
              @click.prevent="
                isCurrenciesBuyShown = !isCurrenciesBuyShown
              "
            >
              Валюта покупки
              <ul
                v-show="isCurrenciesBuyShown"
                class="currency__dropdown absolute top-8 right-0 bg-white py-5 px-3"
              >
                <li
                  class="currency__item flex p-2 rounded hover:bg-purple-200"
                  v-for="item in currencies"
                  :key="item.id"
                >
                  <img
                    :src="
                      require(`~/assets/images/currencies/${item.id}.svg`)
                    "
                    alt=""
                  />
                  <span class="text-black ml-3">{{ item.name }}</span>
                </li>
              </ul>
            </li>
            <li
              :class="
                isCurrenciesShown
                  ? 'has-dropdown sort__item currency relative flex items-center opened'
                  : 'has-dropdown sort__item currency relative flex items-center'
              "
              @click.prevent="isCurrenciesShown = !isCurrenciesShown"
            >
              Валюта продажи
              <ul
                v-show="isCurrenciesShown"
                class="currency__dropdown absolute top-8 right-0 bg-white py-5 px-3"
              >
                <li
                  class="currency__item flex p-2 rounded hover:bg-purple-200"
                  v-for="item in currencies"
                  :key="item.id"
                >
                  <img
                    :src="
                      require(`~/assets/images/currencies/${item.id}.svg`)
                    "
                    alt=""
                  />
                  <span class="text-black ml-3">{{ item.name }}</span>
                </li>
              </ul>
            </li>
            <li
              :class="
                isCountriesShown
                  ? 'has-dropdown sort__item country relative flex items-center opened'
                  : 'has-dropdown sort__item country relative flex items-center'
              "
              @click.prevent="isCountriesShown = !isCountriesShown"
            >
              Страна
              <div
                v-show="isCountriesShown"
                class="country__dropdown absolute top-8 right-0 bg-white py-5 px-3"
              >
                <div class="country__row flex mb-2">
                  <span class="mr-4 w-max">Выбрать все</span>
                  <span>Очистить</span>
                </div>
                <input
                  type="text"
                  class="country__search mb-4 py-1 px-2 text-black placeholder:text-black border-2 rounded"
                  placeholder="Поиск..."
                />
                <ul
                  class="country__list"
                  v-for="country in countries"
                  :key="country.id"
                >
                  <li
                    class="country__item p-2 rounded flex hover:bg-purple-200"
                  >
                    <img
                      :src="
                        require(`~/assets/images/countries/${country}.svg`)
                      "
                      alt=""
                    />
                    <span class="text-black ml-3">{{ country }}</span>
                  </li>
                </ul>
              </div>
            </li>
            <li
              :class="
                isSumShown
                  ? 'has-dropdown sort__item sum relative flex items-center opened'
                  : 'has-dropdown sort__item country relative flex items-center'
              "
              @click.prevent="isSumShown = !isSumShown"
            >
              Сумма
              <div
                v-show="isSumShown"
                class="sum__dropdown absolute top-8 right-0 bg-white py-5 px-3"
              >
                <ul class="sum__list">
                  <li
                    class="sum__item text-black w-max p-2 rounded hover:bg-purple-200"
                  >
                    $1000 - $5000
                  </li>
                  <li
                    class="sum__item text-black w-max p-2 rounded hover:bg-purple-200"
                  >
                    $1 - $1000
                  </li>
                  <li
                    class="sum__item text-black w-max p-2 rounded hover:bg-purple-200"
                  >
                    $5000 - $10000
                  </li>
                  <li
                    class="sum__item text-black w-max p-2 rounded hover:bg-purple-200"
                  >
                    более $10000
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <div class="sort__btn filter">
            <div class="filter__plus">+</div>
            <button class="filter__filter">Фильтр</button>
            <div class="filter__arrow">
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <Sell v-if="$store.state.isSell" />
      <Buy v-else />
      <Info />
    </div>
    <Footer />
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    name: 'IndexPage',
    data() {
      return {
        isSell: false,
        isCountriesShown: false,
        isCurrenciesShown: false,
        isCurrenciesBuyShown: false,
        isSumShown: false,
      };
    },
    computed: {
      ...mapState(['countries']),
      ...mapState(['currencies']),
    },
  };
</script>

<style lang="scss" scoped>
  .wrapper {
    width: 100%;
    .right-side {
      width: 100%;
    }
  }

  .left-side {
    position: fixed;
  }

  .right-side {
    padding-left: 234px;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #cccff9;
    color: #747ae7;

    &__btn {
      padding: 0.6875rem 0.9375rem 1.3125rem;
      color: #747ae7;
      font-size: 1.25rem;
      line-height: 1.25rem;
      background-color: inherit;
      border: none;
      font-weight: 500;
      cursor: pointer;
      transition: 0.3s;

      &-active {
        padding: 0.6875rem 0.9375rem 1.3125rem;
        color: #747ae7;
        font-size: 1.25rem;
        line-height: 1.25rem;
        background-color: inherit;
        border: none;
        font-weight: 500;
        cursor: pointer;
        border-bottom: 4px solid #5156a6;
      }
    }

    &__lang {
      display: flex;
      align-items: center;
      margin-left: 1.125rem;
    }
  }

  .subheader {
    display: flex;
    justify-content: space-between;
    padding: 0.75rem 1.125rem 0.75rem 30px;

    &__btn {
      border: 1px solid #747ae7;
      box-sizing: border-box;
      border-radius: 4px;
      display: flex;
      align-items: center;
    }

    &__create,
    &__plus {
      background-color: transparent;
      font-size: 14px;
      line-height: 16px;
      color: #747ae7;
      cursor: pointer;
      border: none;
      padding: 0 0.375rem;
    }

    &__plus {
      margin-right: 0.375rem;
      padding-left: 0.5rem;
      font-size: 1.125rem;
      line-height: 1.875rem;
      font-weight: 700;
    }

    &__arrow-down {
      padding: 0 0.5rem;
      border-left: 1px solid #747ae7;
      height: 1.875rem;

      span {
        display: block;
        width: 0.625rem;
        height: 0.625rem;
        border-bottom: 0.125rem solid #747ae7;
        border-right: 0.125rem solid #747ae7;
        margin-top: 0.46875rem;
        transform: rotate(45deg);
      }
    }
  }

  .has-dropdown {
    transition: 0.4s;

    &.opened {
      background: #cccff9;
      border-radius: 6px;
    }

    &.opened:after {
      content: '';
      position: absolute;
      top: 30%;
      right: 10px;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 6px 6px 6px;
      border-color: transparent transparent #b0b4ff transparent;
    }

    &:after {
      content: '';
      position: absolute;
      top: 40%;
      right: 10px;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 6px 6px 0 6px;
      border-color: #b0b4ff transparent transparent transparent;
      border-radius: 1px;
    }
  }

  .sum {
    &__dropdown {
      filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.15));

      &:after {
        position: absolute;
        content: '';
        width: 0;
        height: 0;
        top: -8px;
        right: 22px;
        border-style: solid;
        border-width: 0 8px 8px 8px;
        border-color: transparent transparent #ffffff;
      }
    }
  }

  .currency {
    &__dropdown {
      filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.15));

      &:after {
        position: absolute;
        content: '';
        width: 0;
        height: 0;
        top: -8px;
        right: 22px;
        border-style: solid;
        border-width: 0 8px 8px 8px;
        border-color: transparent transparent #ffffff;
      }
    }
  }

  .country {
    user-select: none;
    gap: 0.5rem;

    &__dropdown {
      filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.15));

      &:after {
        position: absolute;
        content: '';
        width: 0;
        height: 0;
        top: -8px;
        right: 22px;
        border-style: solid;
        border-width: 0 8px 8px 8px;
        border-color: transparent transparent #ffffff;
      }
    }

    &__row {
      font-size: 12px;
      line-height: 22px;
    }

    &__search {
      font-size: 14px;
      line-height: 22px;
    }
  }

  .sort {
    display: flex;
    align-items: center;

    &__list {
      display: flex;
      margin: 0;
      align-items: center;
      gap: 20px;
      margin-right: 20px;
    }

    &__item {
      list-style-type: none;
      font-weight: 500;
      font-size: 15px;
      line-height: 18px;
      color: #747ae7;
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 6px 26px 6px 12px;

      &-arrow-down {
        border: solid #747ae7;
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 3px;
        transform: rotate(45deg);
      }

      &-arrow-up {
        border: solid #747ae7;
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 3px;
        transform: rotate(-135deg);
      }
    }
  }

  .filter {
    border: 1px solid #747ae7;
    box-sizing: border-box;
    border-radius: 4px;
    display: flex;
    align-items: center;

    &__filter,
    &__plus {
      background-color: transparent;
      font-size: 14px;
      line-height: 16px;
      color: #747ae7;
      cursor: pointer;
      border: none;
      padding: 0 0.375rem;
    }

    &__plus {
      margin-right: 0.375rem;
      font-size: 1.125rem;
      line-height: 1.875rem;
      font-weight: 700;
    }

    &__arrow {
      padding: 0 0.5rem;
      border-left: 1px solid #747ae7;
      height: 1.875rem;

      span {
        display: block;
        width: 0.625rem;
        height: 0.625rem;
        border-bottom: 0.125rem solid #747ae7;
        border-right: 0.125rem solid #747ae7;
        margin-top: 0.46875rem;
        transform: rotate(45deg);
      }
    }
  }
</style>
