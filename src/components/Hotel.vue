<template>
    <div>
      <h1>Hotels</h1>
      <div class="hotel-container">
        <div v-for="(hotel, index) in hotels" :key="hotel.id" :class="{'hotel-item': true, 'last-item': (index+1) % 2 === 0}">
          <h2>{{ hotel.hotelName }}</h2>
          <p>Country: {{ hotel.country }}</p>
          <p>City: {{ hotel.city }}</p>
          <p>Address: {{ hotel.address }}</p>
          <p>Phone: {{ hotel.phone }}</p>
          <div class="rating">
            <span class="star" v-for="n in hotel.rating" :key="n" style="color:gold">&#9733;</span>
          </div>
          <img :src="getHotelImageUrl(hotel.image)" alt="Hotel Image" />
        </div>
      </div>
    </div>
  </template>
  
  <style>
  .hotel-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  .hotel-item {
    width: 48%;
    margin-bottom: 20px;
  }
  
  .last-item {
    margin-right: 0;
  }
  </style>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        hotels: [],
      };
    },
    mounted() {
      this.getAllHotels();
    },
    methods: {
      getAllHotels() {
        this.$ajax
          .get('/hotels')
          .then(response => {
            this.hotels = response.data;
          })
          .catch(error => {
            console.log(error);
          });
      },
      getHotelImageUrl(image) {
        return `http://localhost:8080/hotels/images/${image}`;
      },
    },
  };
  </script>
  