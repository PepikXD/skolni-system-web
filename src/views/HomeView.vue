<template>
  <div class="home">
    <h1>This is home page</h1>
  </div>
  <hr>
  <div>
    <form class="form-example">
      <div class="form-example">
        <label>username: </label>
        <input type="text" v-model="username"/>
      </div>
      <div class="form-example">
        <label>password: </label>
        <input type="email" v-model="password"/>
      </div>
      <div class="form-example">
        <label>authority: </label>
        <select name="role" v-model="role">
          <option value="admin">Admin</option>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="parent">Parent</option>
        </select>
      </div>
      <div class="form-example">
        <label>id: </label>
        <input type="number" v-model="id">
      </div>
      <button @click.prevent ="createUser">Create user</button>
    </form>
    <hr>
    <button @click.prevent = "login">Login</button>
    <hr>
    <div>
      <label v-if=" createdResponse.id === '' "></label>
      <label v-else>{{ displayCreateUser }}</label>
    </div>
  </div>
</template>

<script setup>
import {ref, computed, reactive} from "vue";
  import axios from "axios"

  let username = ref("");
  let password = ref("");
  let role = ref("student");
  let id = ref("");

   let createdResponse = reactive({
       username: "",
       password: "",
       role: "",
       id:""
   });

  let displayCreateUser = computed( () => createdResponse);

  function createUser(){

    // axios.post(`http://localhost:8080/test/create?username=${username.value}&password=${password.value}&authority=${authority.value}&id=${id.value}`)
    //     .then(res=>{console.log(res)})
    //     .catch(err=>{console.log(err)})

    axios.post("test/create", {
        username:username.value,
        password:password.value,
        authorities:role.value,
        id:id.value
      })
        .then(res => {
          createdResponse.username = res.data.username
          createdResponse.password = res.data.password
          createdResponse.authorities = res.data.authorities
          createdResponse.id = res.data.id;
        })
  }
  function login(){
    axios.post("http://localhost:8080/login",{
      username:username.value,
      password:password.value})
        .then(res=>{console.log(res)})
        .catch(err=>{console.log(err)})
  }

</script>
