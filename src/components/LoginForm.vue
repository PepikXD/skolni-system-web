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
      <button>Submit</button>
    </div>
    <hr>
    <div>
      <label>Your name is: {{ name }}</label>
    </div>
    <div>
      <label>Your email is: {{ email }}</label>
    </div>
  </form>
</template>

<script setup>
import {ref} from "vue";

let name = ref("")
let email = ref("")

</script>

<style scoped>

</style>