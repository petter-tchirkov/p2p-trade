<template>
  <div class="header__auth auth">
    <button class="auth__log" @click="$store.commit('loginUser')">Логин</button>
    <button class="auth__reg">Регистрация</button>
    <div class="header__lang lang">
      <div class="lang__header"></div>
        <span class="lang__current">
          <img src="~/assets/images/flags/russia.svg" alt="" />
          <span>RU</span>
          <span class="arrow"></span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Auth'
  }
</script>

<style lang="scss" scoped>
  .auth {
  display: flex;
  &__log {
    padding: 0.5rem 0.9375rem;
    border-radius: 0.5rem;
    transition: color .3s ease 0s;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #747ae7;
    border: none;
    background-color: #fff;
    cursor: pointer;
  }

  &__reg {
    padding: 0.5rem 0.9375rem;
    border-radius: 0.5rem;
    transition: color .3s ease 0s;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    cursor: pointer;
    background-color: #fff;
    border: 0.125rem solid #747ae7;
  }
}

.lang {
  position: relative;
  cursor: pointer;
  margin-left: 1rem;
  
  &__body {
    position: absolute;
    left: 0;
    right: 0;
    top: 110%;
    flex-direction: column;
    border: 0.125rem solid #747AE7;
    box-sizing: border-box;
    border-radius: 6px;
    padding: 0.375rem 0 0.375rem 0;
    display: flex;
    align-items: center;
    gap: 0.375rem;
    background-color: #fff;
    opacity: 1;
    z-index: 1;
  }

  &.is-active {
    display: flex;
  }

  &__item {
    width: 100%;
    text-align: center;
    padding: 0.125rem 0;
    transition: .3s;

    &:hover {
      background-color: #CDD0FF;
    }

    img {
      width: 25px;
      height: 18px;
      object-fit: cover;
    }
  }

  &__current {
    border: 0.125rem solid #747AE7;
    box-sizing: border-box;
    border-radius: 6px;
    padding: 0.375rem 0.6125rem 0.375rem 0.375rem;
    display: flex;
    align-items: center;
    gap: 0.375rem;

    img {
      width: 25px;
      height: 18px;
      object-fit: cover;
      border: 1px solid #CDD0FF;
    }

    .arrow {
      border: 0.125rem solid #747AE7;
      border-width: 0 2px 2px 0;
      display: inline-block;
      padding: 3px;
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
    }
  }

  .ant-select-selection-item {
    padding: 0;
  }
}
</style>