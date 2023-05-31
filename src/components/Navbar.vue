<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand ml-auto" href="#">
        <img src="../assets/cosmos.png" alt="" width="30" height="30" style="margin-left: -500px;"> BlueSky
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" @click="toggleNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" :class="{ 'show': isNavOpen }" id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/hotels" class="nav-link">Hotels</router-link>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto">
          <li v-if="isLoggedIn()" class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="profileDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              <i class="fas fa-user"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
              <h6 class="dropdown-header">Profile</h6>
              <router-link :to="'/users/' + getUserId()" class="dropdown-item">View Profile</router-link>
              <a class="dropdown-item" href="#" @click="logout()">Logout</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>


<script>
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      isNavOpen: false
    };
  },
 methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    },
    isLoggedIn() {
      const user = localStorage.getItem('user');
      return !!user; 
    },
    getUserId() {
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(JSON.parse(localStorage.getItem('user')));

    return user.id;
 
},

    logout() {
      localStorage.removeItem('user');
      Swal.fire({
        icon:'success',
        text: 'Logged out successfully!'
      });
      this.$router.push("/login");
    }
  }
}
</script>

<style>
@import '../styles/Navbar.css';
</style>
