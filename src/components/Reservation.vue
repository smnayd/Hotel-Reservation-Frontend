<template>
  <div class="reservation-container">
    <div class="reservation-card">
      <i>
      <h2 class="reservation-title">Reservation</h2>
      <div class="form-item">
        <label for="input-checkin">Check-In</label>
        <input ref="checkinInput" type="date" id="input-checkin" name="checkin" v-model="checkin" required>
      </div>
      <div class="form-item">
        <label for="input-checkout">Check-Out</label>
        <input ref="checkoutInput" type="date" id="input-checkout" name="checkout" v-model="checkout" required>
      </div>
      <div class="form-item">
        <label for="input-name">Full Name</label>
        <input ref="nameInput" type="text" id="input-name" name="name" v-model="name" required>
      </div>
      <div class="form-item">
        <label for="input-email">Email</label>
        <input ref="emailInput" type="email" id="input-email" name="email" v-model="email" required>
      </div>
      <div class="form-item">
        <label for="input-phone">Phone</label>
        <input ref="phoneInput" type="tel" id="input-phone" name="phone" v-model="phone" required>
      </div>
      <button class="reservation-button login-button" @click="makeReservation">Make Reservation</button>
      </i>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
export default {
  data() {
    return {
      hotelId: null,
      roomTypeId: null,
      userId: null,
      checkin: null,
      checkout: null,
      name: null,
      email: null,
      phone: null
    };
  },
  mounted() {
    this.hotelId = this.$route.params.hotelId;
    this.roomTypeId = this.$route.params.roomTypeId;
    this.userId = localStorage.getItem('userId');
  },
  methods: {
    makeReservation() {
      const checkin = new Date(this.$refs.checkinInput.value).toISOString().split('T')[0];
      const checkout = new Date(this.$refs.checkoutInput.value).toISOString().split('T')[0];

      const reservation = {
        dateIn: checkin,
        dateOut: checkout,
        reservationDate: new Date(),
        roomType: { id: this.roomTypeId },
        user: { id: this.userId },
        hotel: { id: this.hotelId },
        name: this.name,
        email: this.email,
        phone: this.phone
      };

      this.$ajax
        .post(`/reservations/${this.hotelId}/${this.roomTypeId}/${this.userId}`, reservation)
        .then(response => {
          this.$router.push('/payment');
        })
        .catch(error => {
          Swal.fire({
            icon: 'error',
            text: 'Reservation couldnt complete! Check your information'
          }
          )
        });
    }
  }
};
</script>

<style scoped>
@import '../styles/Reservation.css';
</style>
