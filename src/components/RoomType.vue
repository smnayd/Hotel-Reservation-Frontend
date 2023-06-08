<template>
  <div v-if="currentRoomType">
    <div class="room-container">
      <div class="room-item">
        <div class="hotel-card">
          <h2>{{ currentRoomType.hotel.hotelName }}</h2>
          <p>Country: {{ currentRoomType.hotel.country }}</p>
          <p>City: {{ currentRoomType.hotel.city }}</p>
          <p>Address: {{ currentRoomType.hotel.address }}</p>
          <p>Phone: {{ currentRoomType.hotel.phone }}</p>
          <div class="rating">
            Rating:
            <span
              class="star"
              v-for="n in currentRoomType.hotel.rating"
              :key="n"
              style="color: gold"
            >
              &#9733;
            </span>
          </div>
          <p>
            For more info:
            <a
              :href="currentRoomType.hotel.websiteURL"
              target="_blank"
              style="color: green"
              >{{ currentRoomType.hotel.websiteURL }}</a
            >
          </p>
          <img
            :src="getHotelImageUrl(currentRoomType.hotel.image)"
            alt="Hotel Image"
          />
        </div>
        <div class="room-card">
          <h3>{{ currentRoomType.type }}</h3>
          <p>Capacity: {{ currentRoomType.capacity }}</p>
          <p>Price: {{ currentRoomType.price }}$ per night</p>
          <p>~{{ currentRoomType.description }}</p>
          <img
            :src="getRoomTypeImageUrl(currentRoomType.image)"
            alt="RoomType Image"
          />
          <button class="reservation" @click="makeReservation()">Make Reservation</button>
        </div>
        <div class="buttons-container">
          <button class="button prev" @click="prevRoomType" :disabled="currentRoomIndex === 0"></button>
          <button class="button next" @click="nextRoomType" :disabled="currentRoomIndex === roomtypes.length - 1"></button>
          <div class="pagination">
            <span
              class="dot"
              v-for="(roomType, index) in roomtypes"
              :key="index"
              :class="{ active: index === currentRoomIndex }"
              @click="changeRoomType(index)"
            ></span>
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
      currentRoomIndex: 0
    };
  },
  computed: {
    currentRoomType() {
      return this.roomtypes[this.currentRoomIndex];
    }
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
        })
        .catch(error => {
          console.log(error);
        });
    },
    changeRoomType(index) {
      this.currentRoomIndex = index;
    },
    prevRoomType() {
      if (this.currentRoomIndex > 0) {
        this.currentRoomIndex--;
      }
    },
    getHotelImageUrl(image) {
      return `http://localhost:8080/hotels/images/${image}`;
    },
    getRoomTypeImageUrl(image) {
      return `http://localhost:8080/roomtypes/images/${image}`;
    },
    nextRoomType() {
      this.currentRoomIndex++;
      if (this.currentRoomIndex >= this.roomtypes.length) {
        this.currentRoomIndex = 0;
      }
    },
    makeReservation(){
      const hotelId = this.currentRoomType.hotel.id;
      const roomTypeId = this.currentRoomType.id;

      this.$router.push({
        name: 'Reservation',
        params: { hotelId, roomTypeId }
      });
    },
  }
};
</script>

<style scoped>
@import '../styles/RoomType.css';
</style>
