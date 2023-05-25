<template>
    <div class="container">
      <div class="card">
        <div class="card-body">
          <h3 style="font-style: italic">Login Page</h3>
  
          <label for="email" style="font-style: italic"><b>Email</b></label>
          <input v-model="user.email" ref="email" type="text" placeholder="Enter email" name="email" style="font-style: italic" />
  
          <label for="pwd" style="font-style: italic"><b>Password</b></label>
          <input v-model="user.password" ref="psw" type="password" placeholder="Enter password" name="pwd" style="font-style: italic" />
  
          <div class="clearfix">
            <button class="button" @click="login()">Log in</button>
            <button class="button" @click="register()">Register</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Swal from 'sweetalert2';
  
  export default {
    data() {
      return {
        user: {
          email: "",
          password: ""
        },
      }
    },
    methods: {
      register() {
        this.$router.push("/register");
      },
      login() {
        if (this.checkValidation()) {
          this.$ajax.post("users/login", { email: this.user.email, password: this.user.password })
            .then(response => {
              if (response.data.hasError) {
                Swal.fire("Invalid email or password!");
                this.user.email = "";
                this.user.password = "";
              } else if (response) {
                localStorage.setItem('user', JSON.stringify(response.data));
                if (this.user.email === 'sm.ayd02@gmail.com') {
                  this.$router.push("/admin");
                } else {
                  this.$router.push("/");
                }
              }
  
            })
            .catch(error => {
              if (error.response) {
                Swal.fire(error.response.data);
              }
            });
        }
      },
      checkValidation() {
        if (!this.user.email) {
          this.$refs.email.focus();
          Swal.fire("Give email!");
          return;
        }
        if (!this.user.password) {
          this.$refs.psw.focus();
          Swal.fire("Give password!");
          return;
        }
        if (!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/).test(this.user.email)) {
          this.$refs.email.focus();
          Swal.fire("Give a correct email!");
          return;
        }
        return true;
      }
    }
  }
  </script>
  
  <style scoped>
  @import '../styles/Login.css';
  </style>
  