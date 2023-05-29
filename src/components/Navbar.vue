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
        
      </div>
    </div>
  </nav>
</template>

<script>
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
  }
}
</script>


<style>
@import '../styles/Navbar.css';
</style>
