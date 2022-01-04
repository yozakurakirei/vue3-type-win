const app = Vue.createApp ({
  // template: "<h1>こんにちは</h1>",
  data () {
    return {
      showLogin: true,
    }
  },
  methods: {
    toggleLogin() {
      this.showLogin = !this.showLogin;
    },
  }
})

app.mount("#app");