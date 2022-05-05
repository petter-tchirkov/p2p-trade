<template>
  <aside
    class="navigation w-56 h-screen bg-primary px-7 pt-4 fixed z-10"
  >
    <div class="navigation__content">
      <div class="navigation__top">
        <div class="navigation__links mb-8">
          <div class="navigation__logo">
            <NuxtLink to="/" class="flex">
              <Logo />
              <span>trading</span>
            </NuxtLink>
          </div>
          <div class="navigation__hide">
            <span></span>
          </div>
        </div>
      </div>
      <div v-if="!$store.state.isLoggedIn" class="navigation__want">
        <h3>Я хочу</h3>
        <ul class="navigation__list">
          <a href="">
            <li class="navigation__item">
              <img src="~/assets/images/SellIcon.svg" alt="" />
              <span>Продать</span>
            </li>
          </a>
          <a href="">
            <li class="navigation__item">
              <img src="~/assets/images/BuyIcon.svg" alt="" />
              <span>Купить</span>
            </li>
          </a>
        </ul>
      </div>
      <UserSettings v-else />
    </div>
    <div class="navigation__footer py-6">
      <NuxtLink to="/support">
        <img src="~/assets/images/Help.svg" alt="" />
        Помощь
      </NuxtLink>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'Drawer',
};
</script>

<style lang="scss" scoped>
.navigation {
  height: 100vh;
  background-color: #5156a6;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__links {
    display: flex;
    gap: 25px;
  }

  &__hide {
    border: 1px solid #ffffff;
    box-sizing: border-box;
    border-radius: 6px;
    padding-left: 0.375rem;
    height: 26px;
    width: 23px;
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      border: solid #fff;
      border-width: 0 3px 3px 0;
      display: inline-block;
      padding: 4px;
      transform: rotate(135deg);
      -webkit-transform: rotate(135deg);
    }
  }

  &__top {
    display: flex;
    flex-direction: column;
  }

  &__logo {
    display: flex;
    cursor: pointer;
    align-items: center;
    margin-top: 1rem;
    span {
      font-family: 'Montserrat Alternates', sans-serif;
      color: #fff;
      font-size: 23px;
      line-height: 28px;
      margin-left: 5px;
    }
  }

  &__want {
    h3 {
      font-weight: bold;
      font-size: 18px;
      line-height: 21px;
      color: rgba(255, 255, 255, 0.5);
      margin-bottom: 0.75rem;
    }
  }

  &__list {
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  &__item {
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    color: #fff;
    display: flex;
    align-items: center;
    img {
      margin-right: 0.75rem;
    }
  }

  &__footer {
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      color: #fff;
      font-size: 15px;
      line-height: 18px;

      img {
        margin-right: 0.75rem;
      }
    }
  }
}
.account {
  margin-bottom: 2rem;

  .app {
    &__name {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;

      img {
        margin-right: 0.75rem;
      }

      span {
        font-size: 15px;
        line-height: 18px;
        color: #fff;
      }
    }
  }
}

.applications {
  &__item {
    display: flex;
    justify-content: space-between;
  }

  &__content {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    img {
      margin-right: 0.75rem;
    }

    span {
      font-size: 15px;
      line-height: 18px;
      color: #fff;
    }
  }

  &__value {
    font-size: 15px;
    line-height: 18px;
    color: #fff;
  }
}
</style>
