<template>
  <div>
    <h1>Rooms</h1>
    <div v-if="hotel">
    <div v-for="(room, index) in rooms" :key="room.id" class="room-item">
      <h2>{{ room.roomNumber }}</h2>
      <p>Availability: {{ room.availability }}</p>
      <p>Description: {{ room.roomDescription }}</p>
      <!-- Diğer oda özellikleri buraya eklenebilir -->
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      rooms: [],
    };
  },
  mounted() {
    this.getHotelRooms();
    const hotelId = this.$route.params.hotelId;
    if (hotelId) {
    this.getHotel(hotelId);
  }
  },
  methods: {
    getHotelRooms() {
      const hotelId = this.$route.params.hotelId; // Hotel kimlik bilgisini al
      this.$ajax
        .get('/rooms/' + 'hotel/' + hotelId) // Otelin odalarını getir
        .then(response => {
          this.rooms = response.data;
        })
        .catch(error => {
          console.log(error);
        });
        
    },
    getHotel(hotelId) {
    this.$ajax
      .get('/hotels/' + hotelId)
      .then(response => {
        this.hotel = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  },
};
</script>
<style scoped>
@import '../styles/Hotel.css'
</style>