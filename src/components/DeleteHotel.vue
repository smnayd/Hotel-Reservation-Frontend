<template>
    <div>
      <div class="hotel-container">
        <div v-for="(hotel, index) in hotels" :key="hotel.id" class="hotel-item">
          <div class="hotel-card">
            <h2>{{ hotel.hotelName }}</h2>
            <p>Country: {{ hotel.country }}</p>
            <p>City: {{ hotel.city }}</p>
            <p>Address: {{ hotel.address }}</p>
            <p>Phone: {{ hotel.phone }}</p>
            <div class="rating"> 
              Rating:          
              <span class="star" v-for="n in hotel.rating" :key="n" style="color:gold;">&#9733;</span>
            </div>
            <img :src="getHotelImageUrl(hotel.image)" alt="Hotel Image" />
            <button class="button" @click="deleteHotel(hotel.id)">Delete</button>
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
            Swal.fire(error);
          });
      },
      getHotelImageUrl(image) {
        return `http://localhost:8080/hotels/images/${image}`;
      },
      deleteHotel(hotelId) {
        this.$ajax
          .delete(`hotels/${hotelId}`)
          .then(response => {
              this.getAllHotels();
              Swal.fire('Hotel deleted successfully!');
            
          })
          .catch(error => {
            Swal.fire(error);
          });
      }
    },
  };
  </script>
  
  <style scoped>
  @import '../styles/Hotel.css';
  </style>
  