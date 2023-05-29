<template>
  <div class="home">
    <div class="container">
      <div class="card">
        <h1 style="margin-left:100px">Welcome to BlueSky Hotel Reservation System 🙋🏻‍♀️</h1>
      <p>We are delighted to have you here. With our user-friendly platform, you can easily browse and book the perfect accommodations for your stay. Whether you're planning a business trip or a relaxing vacation, we've got you covered.</p>
      <p>Discover a wide range of luxurious hotels, cozy bed and breakfasts, and charming resorts at your fingertips. Our advanced search features and detailed property descriptions will help you find the ideal option that meets your preferences and budget.</p>
      <p>At BlueSky, we prioritize your comfort and convenience. Our secure booking process ensures your personal information is protected, giving you peace of mind throughout the reservation process.</p>
      <p>Should you need any assistance or have any inquiries, our dedicated support team is ready to assist you. Feel free to reach out to us at any time.</p>
      <p>Thank you for choosing BlueSky Hotel Reservation System. We look forward to helping you create unforgettable travel experiences!</p>
      <p style="margin-left:450px;">Click <a href="/login"  class="login-link">here</a> to log in or register.</p>
    
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import Footer from '@/components/Footer.vue';
export default {
  name: "HomeView",
  components: {Footer},
};
</script>

<style>
.home {
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  width: 100%;
  padding: 0px;
  border-radius: 10px;
}
.card{
  margin-top: -100px;
  border-radius: 20px;
  background-color: rgb(242, 214, 162);
}
p{
  font-size: 18px;
}
.login-link {
  text-decoration: none;
  color: #000;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease;
}

.login-link:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}
</style>
