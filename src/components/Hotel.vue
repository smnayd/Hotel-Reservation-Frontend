<template>
  <div>
    <button class="create" @click="addHotel()">Add Hotel</button>
    <h1 style="margin-left:700px; font-style:italic; margin-top:30px;">Hotels</h1>
    <div class="hotel-container">
      <div v-for="(hotel, index) in hotels" :key="hotel.id" class="hotel-item">
        <div class="hotel-card">
          <h2>{{ hotel.hotelName }}</h2>
          <p>Country: {{ hotel.country }}</p>
          <p>City: {{ hotel.city }}</p>
          <p>Address: {{ hotel.address }}</p>
          <p>Phone: {{ hotel.phone }}</p>
          <div class="rating">
            <span class="star" v-for="n in hotel.rating" :key="n" style="color:gold">&#9733;</span>
          </div>
          <img :src="getHotelImageUrl(hotel.image)" alt="Hotel Image" />
          <button class="button" @click="handleClick()">Click</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

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
    handleClick() {
      this.$router.push("/");
    },
    addHotel(){
      this.$router.push("/addHotel");
    }
  },
};
</script>

<style scoped>
@import '../styles/Hotel.css';
</style>