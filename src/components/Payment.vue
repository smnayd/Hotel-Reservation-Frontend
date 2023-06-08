<template>
    <div>
      <div class="payment-container">
        <div class="payment-card">
          <h3>Card Info</h3>
          <label>Card No:</label>
          <br>
          <input type="text" v-model="cardNo">
          <br><br>
          <label>Card Expiry:</label>
          <div class="card-expiry">
            <input type="text" v-model="cardMonth" placeholder="Ay" class="expiry-input">
            <span>/</span>
            <input type="text" v-model="cardYear" placeholder="Yıl" class="expiry-input">
          </div>
  
          <button class="payment-button" @click="makePayment">Pay</button>
          <p v-if="paymentSuccessful">Payment Successful</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Swal from 'sweetalert2';
  
  export default {
    data() {
      return {
        cardNo: '',
        cardMonth: '',
        cardYear: '',
        paymentSuccessful: false
      };
    },
    methods: {
      makePayment() {
        const paymentData = {
          cardNo: this.cardNo,
          cardMonth: this.cardMonth,
          cardYear: this.cardYear,
          amount: this.amount
        };
  
        this.$ajax
          .post('/payments', paymentData)
          .then(response => {
            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'Payment completed successfully.'
            });
            this.paymentSuccessful = true;
          })
          .catch(error => {
            console.error(error);
            Swal.fire({
              icon: 'error',
              title: 'Hata',
              text: 'Payment failed.'
            });
          });
      }
    }
  };
  </script>
  
  <style scoped>
  
  .payment-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin-top: -50px;
  }
  
  .payment-card {
    background-color: rgb(207, 189, 167);
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 500px;
    text-align: center;
  }
  
  .card-expiry {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 150px;
    margin-left: 140px;
  }
  
  .expiry-input {
    width: 40%;
    padding: 5px;
    display: inline-block;
    border: none;
    background: #f1f1f1;
  }
  
  .payment-button {
    background-color: rgb(125, 93, 42);
    width: 40%;
    color: rgb(254, 254, 254);
    border: 2px;
    border-radius: 30px;
    padding: 15px 5px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 18px;
    font-style: italic;
    margin-top: 20px;
    cursor: pointer;
    transition-duration: 0.3s;
  }
  
  .payment-button:hover {
    background-color: rgb(237, 209, 156);
  }
  
  input[type=text]{
    width: 40%;
    padding: 5px;
    margin-top: 5px;
    display: inline-block;
    border: none;
    background: #f1f1f1;
  }
  
  input[type=text]:focus {
    background-color: #ddd;
    outline: none;
  }
  </style>
  