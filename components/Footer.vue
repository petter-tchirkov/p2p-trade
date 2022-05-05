<template>
  <footer class="footer px-6 py-6 border-r-2 fixed bottom-0 right-0 bg-white w-full pl-64 z-0 border-t-2">
      <div class="footer__links">
        <a href="">О нас</a>
        <a href="">Пользовательское соглашение</a>
      </div>
      <div class="footer__socials socials">
        <ul class="socials__list" v-for="social in socials" :key="social.id">
          <li class="socials__item">
            <a href="">
              <img :src="require(`~/assets/images/socials/${social.src}.svg`)" alt="">
            </a>
          </li>
        </ul>
      </div>
    </footer>
</template>

<script>
  export default {
    data() {
      return {
        socials: [
          {
            id: 1,
            name: "facebook",
            src: "fb",
          },
          {
            id: 2,
            name: "instagram",
            src: "ig",
          },
          {
            id: 3,
            name: "youtube",
            src: "yt",
          },
          {
            id: 4,
            name: "twitter",
            src: "twitter",
          },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: space-between;

  &__socials {
    display: flex;
  }

  &__links {
    display: flex;
    gap: 2.25rem;

    a {
      font-size: 15px;
      line-height: 18px;
      color: #747AE7;
    }
  }
}

.socials {
  display: flex;

  &__list {
    display: flex;
    align-items: center;
    margin-right: 10px;

    li {
      list-style-type: none;
    }
  }
}
</style>