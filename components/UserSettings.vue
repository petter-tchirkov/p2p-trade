<template>
  <div class="settings">
      <h3>Аккаунт</h3>
      <div class="account">
        <div class="account__item app">
          <div class="app__name">
            <img src="~/assets/images/bills.svg" alt="" />
            <span>Счета</span>
          </div>
        </div>
        <div class="account__item">
          <div class="app__name">
            <img src="~/assets/images/settings.svg" alt="" />
            <span>Настройки</span>
          </div>
        </div>
        <div class="account__item">
          <div class="app__name">
            <img src="~/assets/images/partner.svg" alt="" />
            <span>Партнерам</span>
          </div>
        </div>
      </div>
      <div class="applications">
        <h3>Заявки</h3>
        <div class="applications__dashboard">
          <div class="applications__item">
            <div class="applications__content">
              <img src="~/assets/images/active.svg" alt="" />
              <span>Активные</span>
            </div>
            <div class="applications__value">573</div>
          </div>
          <div class="applications__item">
            <div class="applications__content">
              <img src="~/assets/images/accepted.svg" alt="" />
              <span>Принятые</span>
            </div>
            <div class="applications__value">312</div>
          </div>
          <div class="applications__item">
            <div class="applications__content">
              <img src="~/assets/images/closed.svg" alt="" />
              <span>Закрытые</span>
            </div>
            <div class="applications__value">1928</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'UserSettings'
  }
</script>

<style lang="scss" scoped>

h3 {
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 0.75rem;
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