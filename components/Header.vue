<template>
  <header class="header pr-5 pl-8">
    <nav class="header__navigation">
      <button
        :class="$store.state.isSell ? 'header__btn-active' : 'header__btn'"
        @click="$store.commit('showSell')"
      >
        Продажа
      </button>
      <button
        :class="!$store.state.isSell ? 'header__btn-active' : 'header__btn'"
        @click="$store.commit('showBuy')"
      >
        Покупка
      </button>
    </nav>
    <UserPanel v-if="$store.state.isLoggedIn"/>
    <Auth v-else />
  </header>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style lang="scss" scoped>
  .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #CCCFF9;;
  color: #747ae7;
  width: 100%;

  

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
      border-bottom: 4px solid #5156A6;
    }
  }

  &__lang {
    display: flex;
    align-items: center;
    margin-left: 1.125rem;
  }
}
</style>