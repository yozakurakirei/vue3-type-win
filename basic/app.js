const app = Vue.createApp ({
  // template: "<h2>vueのテンプレからです</h2>",
  data() {
    return {
      title: "お前なんかもう死んでいる",
      author: "有吉弘行",
      age: 47,
    }
  },
  methods: {
    changeTitle() {
      this.title = "嫌われない毒舌のすすめ"
    }
  }
})

app.mount("#app");
