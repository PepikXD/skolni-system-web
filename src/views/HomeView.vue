<template>
  <div class="home">
    <h1>This is home page</h1>
  </div>
  <hr>
  <div>
    <form class="form-example">
      <div class="form-example">
        <label>Enter username: </label>
        <input type="text" v-model="username"/>
      </div>
      <div class="form-example">
        <label>Enter password: </label>
        <input type="email" v-model="password"/>
      </div>
      <div class="form-example">
        <label>Enter authority: </label>
        <input type="text" v-model="authorities"/>
      </div>
      <div class="form-example">
        <label>Enter id: </label>
        <input type="number" v-model="id">
      </div>
      <button @click.prevent ="createUser">Create user</button>
    </form>
    <hr>
    <button @click.prevent = "login">Login</button>
    <hr>
    <div>
      <label>{{ displayCreateUser }}</label>
    </div>
  </div>
</template>

<script setup>
import {ref, reactive, computed} from "vue";
  import axios from "axios"

  let username = ref("");
  let password = ref("");
  let authorities = ref("");
  let id = ref("");

  let createdResponse = reactive({});


  const displayCreateUser = computed(() => {
    return createdResponse
})

  function createUser(){

    // axios.post(`http://localhost:8080/test/create?username=${username.value}&password=${password.value}&authority=${authority.value}&id=${id.value}`)
    //     .then(res=>{console.log(res)})
    //     .catch(err=>{console.log(err)})

    axios.post("http://localhost:8080/test/create", {
      username:username.value,
      password:password.value,
      authorities:authorities.value,
      id:id.value,})
        .then(res => createdResponse = res.data)
        .then(res => console.log(res))
  }
  function login(){
    axios.post("http://localhost:8080/login",{
      username:username.value,
      password:password.value})
        .then(res=>{console.log(res)})
        .catch(err=>{console.log(err)})
  }

</script>
