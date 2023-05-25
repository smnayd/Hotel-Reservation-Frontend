<template>
    <div>
      <h1 style="margin-left:750px; font-style:italic; margin-top:30px;">Hotels</h1>
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
              <span class="star" v-for="n in hotel.rating" :key="n" style="color: gold;">&#9733;</span>
            </div>
            <img :src="getHotelImageUrl(hotel.image)" alt="Hotel Image" />
            <div v-if="editingHotel === hotel.id">
              <form @submit.prevent="updateHotel(hotel)">
                <label>Hotel Name:</label>
                <input type="text" v-model="hotel.hotelName" required>
                <label>Country:</label>
                <input type="text" v-model="hotel.country" required>
                <label>City:</label>
                <input type="text" v-model="hotel.city" required>
                <label>Address:</label>
                <input type="text" v-model="hotel.address" required>
                <label>Phone:</label>
                <input type="text" v-model="hotel.phone" required>
                <label>Rating:</label><br>
                <input type="number" v-model="hotel.rating" required><br>
                <label>Image URL:</label>
                <input type="text" v-model="hotel.image" required>
                <button type="submit">Save</button>
              </form>
            </div>
            <div v-else>
              <button class="button" @click="editHotel(hotel.id)">Update</button>
            </div>
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
        editingHotel: null, 
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
      editHotel(hotelId) {
        this.editingHotel = hotelId;
      },
      updateHotel(hotel) {
        this.$ajax
          .put(`/hotels/${hotel.id}`, hotel)
          .then(response => {
            this.editingHotel = null;
            this.getAllHotels();
            Swal.fire('Hotel updated successfully!');
          })
          .catch(error => {
            Swal.fire(error);
          });
      },
    },
  };
  </script>
  
  <style scoped>
  @import '../styles/Hotel.css';
  @import '../styles/Register.css'
  </style>
  