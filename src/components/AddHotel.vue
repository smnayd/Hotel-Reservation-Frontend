<template>
  <div class="container" style="margin-top:10px;">
    <div class="card">
      <div class="card-body">
        <i>
        <h3>Add Hotel</h3>
        <p >Please fill all the fields to create a hotel.</p>

        <label for="hotelName" style="font-style: italic"><b>Hotel Name</b></label>
        <input v-model="hotel.hotelName" ref="hotelName" type="text" placeholder="Enter Hotel Name" name="hotelName" style="font-style: italic"/>

        <label for="country"><b>Country</b></label><br>
        <select v-model="hotel.country" style="width:150px; margin-top:10px;">
          <option v-for="country in countries" :value="country" :key="country">
            {{ country }}
          </option>
        </select>
        <br><br>
        <label for="city"><b>City</b></label>
        <input v-model="hotel.city" ref="city" type="text" placeholder="Enter City" name="city" style="font-style: italic"/>

        <label for="address"><b>Address</b></label>
        <input v-model="hotel.address" ref="address" type="text" placeholder="Enter Address" name="address" style="font-style: italic"/>

        <label for="phone"><b>Phone</b></label>
        <input v-model="hotel.phone" ref="phone" type="text" placeholder="Enter Phone" name="phone" style="font-style: italic"/>

        <label for="rating"><b>Rating</b></label><br>
        <input v-model="hotel.rating" ref="rating" type="number" placeholder="Enter Rating" name="rating" style="font-style: italic; width: 30%" max="5" min="1"/>

        <br><br>
        <label for="image"><b>Image</b></label>
        <input v-model="hotel.image" ref="image" type="text" placeholder="Enter Image" name="image" style="font-style: italic"/>

        <div class="clearfix">
          <button class="button" @click="add()">Add</button>
        </div>
      </i>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  import Swal from 'sweetalert2';
  
  export default {
    data() {
      return {
        hotel: {
          hotelName: "",
          country: "",
          city: "",
          address: "",
          phone: "",
          rating: null,
          image: ""
        },
        countries: []
      };
    },
    mounted() {
      this.fetchCountryNames();
    },
    methods: {
      fetchCountryNames() {
        this.$ajax.get('https://restcountries.com/v3.1/all')
          .then(response => {
            this.countries = response.data.map(country => country.name.common);
          })
          .catch(error => {
            Swal.fire(error);
          });
      },
      add() {
        if (this.checkValidation()) {
          this.$ajax.post("hotels", {
            hotelName: this.hotel.hotelName,
            country: this.hotel.country,
            city: this.hotel.city,
            address: this.hotel.address,
            phone: this.hotel.phone,
            rating: this.hotel.rating,
            image: this.hotel.image
          })
          .then(response => {
            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'Hotel added successfully!'
            });
            this.resetForm();
            this.$router.push("/hotels");
          })
          .catch(error => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Failed to add hotel!'
            });
            console.log(error);
          });
        }
      },
      checkValidation() {
        if (
          this.hotel.hotelName &&
          this.hotel.country &&
          this.hotel.city &&
          this.hotel.address &&
          this.hotel.phone &&
          this.hotel.rating &&
          this.hotel.image
        ) {
          return true;
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill all the fields!'
          });
          return false;
        }
      },
      resetForm() {
        this.hotel.hotelName = "";
        this.hotel.country = "";
        this.hotel.city = "";
        this.hotel.address = "";
        this.hotel.phone = "";
        this.hotel.rating = null;
        this.hotel.image = "";
        this.$refs.hotelName.focus();
      }
    }
  };
  </script>
<style scoped>
@import '../styles/Register.css';
</style>  