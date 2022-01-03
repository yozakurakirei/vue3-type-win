<template>
  <div class="container">
    <h2>{{ name }}</h2>
    <button @click="changeName('眠くなってきちゃうね')">上の文字を変更できるよ</button>
    <p>{{ age }}歳だよ!</p>
    <button @click="changeAge('34')">本当の年齢を見てみよう</button>
    <p>{{ message }}</p>
    <p>この文字が表示されないな</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
  },
  data() {
    return {
      name: "Vue3 and Typescript",
      age: 25 as string | number,
    };
  },
  methods: {
    changeName(name: string) {
      this.name = name;
      return name;
    },
    changeAge(age: string | number) {
      this.age = age;
      return age;
    }
  },
  setup () {
    const state = reactive<{ message:string }>({
      message: "hello",
    });
    return {
      state,
    };
  }
});
</script>

<style lang="scss">
.container {
  padding: 1rem; 
}
</style>
