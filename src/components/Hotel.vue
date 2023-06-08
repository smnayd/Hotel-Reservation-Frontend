<template>
  <div>
    <div class="search-form">
      <div class="form-item">
        <label for="input-checkin">Check In</label>
        <input ref="checkinInput" type="date" id="input-checkin" name="checkin" pattern="\d{4}-\d{2}-\d{2}" required>
      </div>
      <div class="form-item">
        <label for="input-checkout">Check Out</label>
        <input ref="checkoutInput" type="date" id="input-checkout" name="checkout" required>
      </div>
      <div class="form-item">
        <label for="input-guests">Guest</label>
        <select ref="guestsInput" id="input-guests" name="guests" required>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      <button class="search-button" @click="searchHotel()">Search</button>
    </div>
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
          <button class="button" @click="handleClick(hotel.id)">Select</button>
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
    searchHotel() {
      const checkin = this.$refs.checkinInput.value;
      const checkout = this.$refs.checkoutInput.value;      
      const guests = this.$refs.guestsInput.value;
      const params = new URLSearchParams();
      params.append('dateIn', checkin);
      params.append('dateOut', checkout);
      params.append('guestCount', guests);
      

      this.$ajax
        .get('/hotels/search', { params: params, 
          query: {
          checkin: checkin,
          checkout: checkout,
          guests: guests
        } })
        .then(response => {
          this.hotels = response.data;
        })
        .catch(error => {
        Swal.fire({
        icon: 'error',
        title: 'Search Mistake',
        text: 'Be careful at check-in check-out date!',
      });
        });
    },
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
    handleClick(hotelId) {
      this.$router.push(`/roomtypes/hotel/${hotelId}`);
    }
  },
};
</script>

<style scoped>
@import '../styles/Hotel.css';
</style>