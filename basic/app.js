const app = Vue.createApp ({
  // template: "<h2>vueのテンプレからです</h2>",
  data() {
    return {
      showBox: true,
      showLogin: true,
      books: [
        { title: "お前なんかもう死んでいる", author: "有吉弘行", img: "assets/ariyosi.jpeg", isFav: false},
        { title: "1%の努力", author: "ひろゆき", img: "assets/hiroyuki.png", isFav: false},
        { title: "遺書", author: "松本人志", img: "assets/matumoto.png", isFav: false},
      ]
    }
  },
  methods: {
    changeTitle() {
      this.title = "嫌われない毒舌のすすめ"
    },
    ToggleShowBox() {
      this.showBox = !this.showBox;
    },
    toggleLogin () {
      this.showLogin = !this.showLogin;
    },
    handleClick (e) {
      console.log(e, e.type);
    },
    toggleClass(book) {
      book.isFav = !book.isFav;
    }
  }
})

app.mount("#app");
