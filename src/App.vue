<template>
  <div id="app">
    <Navbar />
  </div>  
  <RouterView />
</template>
  
<script>
import Navbar from '@/components/Navbar.vue';
import { RouterView } from 'vue-router';

export default{
    components:{RouterView, Navbar},
    setup(){
      return { 

       }
    }
  }
  </script> 
  
 <style>
    #app{
      background-image: url("./assets/image.jpg");
      background-size: 100%;
    }
  </style> 