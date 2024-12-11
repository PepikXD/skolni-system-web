<template>
  <form class="form-example">
    <div class="form-example">
      <label>Enter your name: </label>
      <input type="text" v-model="name"/>
    </div>
    <div class="form-example">
      <label>Enter your email: </label>
      <input type="email" v-model="email"/>
    </div>
    <div class="form-example">
      <button type="submit">Submit</button>
    </div>
  </form>
</template>

<script setup>
import {ref} from "vue";
// import {useAuthStore} from "@/store/auth";

// const authStore = useAuthStore();

let name = ref("")
let email = ref("")

</script>

<style scoped>

</style>