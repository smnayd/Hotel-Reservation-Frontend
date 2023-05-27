<template>
  <div>    
    <div class="room-container">
      <div v-for="(roomtype, index) in roomtypes" :key="roomtype.id" class="room-item">
        <div class="hotel-card" v-if="index === 0">
          <h2>{{ roomtype.hotel.hotelName }}</h2>
          <p>Country: {{ roomtype.hotel.country }}</p>
          <p>City: {{ roomtype.hotel.city }}</p>
          <p>Address: {{ roomtype.hotel.address }}</p>
          <p>Phone: {{ roomtype.hotel.phone }}</p>
          <div class="rating"> 
            Rating:          
            <span class="star" v-for="n in roomtype.hotel.rating" :key="n" style="color:gold;">&#9733;</span>
          </div>
          <img :src="getHotelImageUrl(roomtype.hotel.image)" alt="Hotel Image" />
        </div>
        <div class="room-card">
          <div class="room-details">
            <div class="room-info">
              <h3>{{ roomtype.type }}</h3>
              <p>Capacity: {{ roomtype.capacity }}</p>
              <p>Price: {{ roomtype.price }}$</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      roomtypes: [],
    };
  },
  mounted() {
    const hotelId = this.$route.params.id;
    this.getRoomsByHotelId(hotelId);
  },
  methods: {
    getRoomsByHotelId(hotelId) {
      this.$ajax
        .get(`/roomtypes/hotel/${hotelId}`)
        .then(response => {
          this.roomtypes = response.data;
          console.log(response);
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

<style scoped>
@import '../styles/RoomType.css';
@import '../styles/Hotel.css';
</style>
