import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    state: {
      isSell: true,
      isLoggedIn: false,
      users: [
        {
          name: "FloydMiles",
          id: 1,
          user: "floyd-miles",
          course: "2 857 996,50",
          trade: { from: "btc", to: "alpha" },
          sum: "103028.02",
          rating: { number: "4.23", votes: "765" },
          isVerified: false,
          isOnline: true,
          description:
            "Я всегда онлайн. Меняю крупные суммы на Сбербанк, Яндекс, Киви и другие валты в рублях.",
          since: "с 10 октября 2021",
          activeOrders: 2,
          averageDepositTime: 15,
        },
        {
          name: "Courtney_Henry",
          id: 2,
          user: "courtney-henry",
          course: "2 857 996,50",
          sum: "7498.32",
          trade: { from: "btc", to: "sber" },
          rating: { number: "1.57", votes: "1029" },
          isVerified: true,
          isOnline: true,
          description:
            "Я всегда онлайн. Меняю крупные суммы на Сбербанк, Яндекс, Киви и другие валты в рублях.",
          since: "с 10 октября 2021",
          activeOrders: 2,
          averageDepositTime: 15,
        },
        {
          name: "DianneRussell",
          id: 3,
          user: "dianell-russel",
          course: "2 857 996,50",
          trade: { from: "btc", to: "alpha" },
          sum: "10428.12",
          rating: { number: "5.00", votes: "421" },
          isVerified: false,
          isOnline: true,
          description:
            "Я всегда онлайн. Меняю крупные суммы на Сбербанк, Яндекс, Киви и другие валты в рублях.",
          since: "с 10 октября 2021",
          activeOrders: 2,
          averageDepositTime: 15,
        },
        {
          name: "Kristin_Watson",
          id: 4,
          user: "krisin-watson",
          course: "2 857 996,50",
          trade: { from: "pb", to: "alpha" },
          sum: "1428.33",
          rating: { number: "3.74", votes: "92" },
          isVerified: true,
          isOnline: true,
          description:
            "Я всегда онлайн. Меняю крупные суммы на Сбербанк, Яндекс, Киви и другие валты в рублях.",
          since: "с 10 октября 2021",
          activeOrders: 2,
          averageDepositTime: 15,
        },
      ],
      support: [
        {
          id: 1,
          summary: "Et similique corporis illo distinctio. ",
          detail:
            "Ut molestias modi in nihil dolores voluptas quo1 . Quo nobis corporis nesciunt aut sed itaque voluptates. Delectus quia consectetur consequatur minima autem doloremque2 quae eius quia. Quos ea quaerat reiciendis laboriosam similique perspiciatis. Rerum corrupti nam quam quis quasi dolorum. Eaque sed est dolorem iusto voluptates est.",
        },
        {
          id: 2,
          summary:
            "Molestiae enim cupiditate molestiae itaque numquam voluptatem quas.",
          detail:
            "Ut molestias modi in nihil dolores voluptas quo1 . Quo nobis corporis nesciunt aut sed itaque voluptates. Delectus quia consectetur consequatur minima autem doloremque2 quae eius quia. Quos ea quaerat reiciendis laboriosam similique perspiciatis. Rerum corrupti nam quam quis quasi dolorum. Eaque sed est dolorem iusto voluptates est.",
        },
        {
          id: 3,
          summary: "Nobis provident quo. Dolores consectetur sint.",
          detail:
            "Ut molestias modi in nihil dolores voluptas quo1 . Quo nobis corporis nesciunt aut sed itaque voluptates. Delectus quia consectetur consequatur minima autem doloremque2 quae eius quia. Quos ea quaerat reiciendis laboriosam similique perspiciatis. Rerum corrupti nam quam quis quasi dolorum. Eaque sed est dolorem iusto voluptates est.",
        },
        {
          id: 4,
          summary:
            "Quas corrupti qui optio dolorum labore omnis modi eum quaerat.",
          detail:
            "Ut molestias modi in nihil dolores voluptas quo1 . Quo nobis corporis nesciunt aut sed itaque voluptates. Delectus quia consectetur consequatur minima autem doloremque2 quae eius quia. Quos ea quaerat reiciendis laboriosam similique perspiciatis. Rerum corrupti nam quam quis quasi dolorum. Eaque sed est dolorem iusto voluptates est.",
        },
        {
          id: 5,
          summary: "Non nemo delectus numquam numquam architecto nihil harum.",
          detail:
            "Ut molestias modi in nihil dolores voluptas quo1 . Quo nobis corporis nesciunt aut sed itaque voluptates. Delectus quia consectetur consequatur minima autem doloremque2 quae eius quia. Quos ea quaerat reiciendis laboriosam similique perspiciatis. Rerum corrupti nam quam quis quasi dolorum. Eaque sed est dolorem iusto voluptates est.",
        },
      ],
      reviews: [
        {
          id: 1,
          name: "CodyFisher",
          isVerified: false,
          isPositive: true,
          text: "Очерной успещный обмен. Спасибо.",
          date: "20 августа 2021",
          occupation: "Продажа, малый объем",
        },
        {
          id: 2,
          name: "Kristin_Watson",
          isVerified: true,
          isPositive: false,
          text: "Хреновый контраегнт. Акцептирует заявку и не оплачивает. В черный список!",
          date: "20 августа 2021",
          occupation: "Продажа, малый объем",
        },
        {
          id: 3,
          name: "BrooklynSimmons",
          isVerified: true,
          isPositive: true,
          text: "Очерной успещный обмен. Спасибо.",
          date: "20 августа 2021",
          occupation: "Продажа, малый объем",
        },
        {
          id: 4,
          name: "Robert_Fox",
          isVerified: true,
          isPositive: false,
          text: "Хреновый контраегнт. Акцептирует заявку и не оплачивает. В черный список! Хреновый контраегнт. Акцептирует заявку и не оплачивает. В черный список! Хреновый контраегнт. Акцептирует заявку и не оплачивает. В черный список!",
          date: "20 августа 2021",
          occupation: "Продажа, малый объем",
        },
      ],
      isDropdownShown: false,
      countries: [
        "Андорра",
        "Афганистан",
        "Албания",
        "Армения",
        "Ангола",
        "Аргентина",
        "Австрия",
        "Австралия",
        "Бангладеш",
        "Бельгия",
        "Болгария",
      ],
      currencies: [
        {
          id: "alpha",
          name: "Альфабанк",
        },
        {
          id: "pb",
          name: "Приватбанк",
        },
        {
          id: "sber",
          name: "Сбербанк",
        },
        {
          id: "btc",
          name: "Биткоин",
        },
      ],
    },
    mutations: {
      showSell(state) {
        state.isSell = true;
      },
      showBuy(state) {
        state.isSell = false;
      },
      loginUser(state) {
        state.isLoggedIn = true;
      },
    },
  });

export default store;
