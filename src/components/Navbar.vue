<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="toggleNav"
        >
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
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
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
      }
    }
  }
  </script>
  
  <style>
  .navbar-nav {
    justify-content: center; /* Menü elemanlarını yatayda ortala */
  }
  
  .navbar-brand {
    margin-right: 1rem; /* Logoya sağdan boşluk ver */
  }
  
  .navbar-toggler {
    border: none; /* Düğme çerçevesini kaldır */
  }
  
  .navbar-toggler-icon {
    background-color: #000; /* Düğme simgesinin rengini ayarla */
  }
  
  .navbar-toggler:focus,
  .navbar-toggler:active {
    outline: none; /* Düğme odaklandığında veya aktif olduğunda vurguyu kaldır */
  }
  
  @media (max-width: 991.98px) {
    /* 992 pikselin altındaysa (tablet ve mobil cihazlar için) */
    .navbar-nav {
      flex-direction: column; /* Menü elemanlarını dikey hizala */
    }
  
    .navbar-brand {
      margin-bottom: 1rem; /* Logoya alttan boşluk ver */
    }
  
    .navbar-collapse {
      padding-top: 1rem; /* Açılır menü içeriğine üstten boşluk ver */
    }
  
    .navbar-toggler {
      margin-left: auto; /* Düğmeyi sağa hizala */
    }
  }
  </style>
  