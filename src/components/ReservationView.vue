<template>
    <div>
      <h2>Reservations</h2>
      <div class="reservation-container">
        <div v-for="(reservation, index) in reservations" :key="reservation.id" class="reservation-card">
          <p>Name: {{ reservation.name }}</p>
          <p>E-mail: {{ reservation.email }}</p>
          <p>Phone: {{ reservation.phone }}</p>
          <p>Date In: {{ reservation.dateIn }}</p>
          <p>Date Out: {{ reservation.dateOut }}</p>
          <p>Reservation Date: {{ reservation.reservationDate }}</p>
          <p>Reservation Status: {{ 'completed' }}</p>
  
          <button class="reservation-button" @click="cancelReservation(reservation.id)">Cancel Reservation</button>
          <button class="reservation-button" @click="updateReservation = reservation">Update Reservation</button>
  
          <div v-if="updateReservation !== null && updateReservation.id === reservation.id">
            <label>Name:</label>
            <input type="text" v-model="updateReservation.name">
            <br>
            <label>E-mail:</label>
            <input type="email" v-model="updateReservation.email">
            <br>
            <label>Phone:</label>
            <input type="text" v-model="updateReservation.phone">
            <br>
            <label>Date In:</label>
            <input type="date" v-model="updateReservation.dateIn">
            <br>
            <label>Date Out:</label>
            <input type="date" v-model="updateReservation.dateOut">
            <button class="reservation-button" @click="saveReservation()">Save</button>
            <button class="reservation-button" @click="cancelUpdating()">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Swal from 'sweetalert2';
  
  export default {
    created() {
      this.fetchReservations();
    },
    data() {
      return {
        reservations: [],
        updateReservation: null
      };
    },
    methods: {
      getUserId() {
        return JSON.parse(localStorage.getItem('userId'));
      },
      fetchReservations() {
        const userId = this.getUserId();
        if (userId) {
          this.$ajax
            .get(`/reservations/view/${userId}`)
            .then(response => {
              this.reservations = response.data;
              console.log(response.data);
            })
            .catch(error => {
              console.error(error);
              Swal.fire({
                icon: 'error',
                text: 'Something went wrong...'
              });
            });
        } else {
          this.reservations = [];
        }
      },
      cancelReservation(reservationId) {
        this.$ajax
          .delete(`/reservations/${reservationId}`)
          .then(response => {
            Swal.fire({
              icon: 'success',
              title: 'Cancelled',
              text: 'Reservation cancelled successfully.'
            });
            this.fetchReservations();
          })
          .catch(error => {
            console.error(error);
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Something went wrong...'
            });
          });
      },
      saveReservation() {
        const reservationId = this.updateReservation.id;
        const updatedReservation = { ...this.updateReservation };
        delete updatedReservation.id;
  
        this.$ajax
          .put(`/reservations/${reservationId}`, updatedReservation)
          .then(response => {
            Swal.fire({
              icon: 'success',
              title: 'Successful',
              text: 'Reservation updated!'
            });
            this.fetchReservations();
            this.updateReservation = null;
          })
          .catch(error => {
            console.error(error);
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Reservation update failed!'
            });
          });
      },
      cancelUpdating() {
        this.updateReservation = null;
      }
    }
  }
  </script>
  
  <style scoped>
  @import '../styles/ReservationView.css';
  </style>
  