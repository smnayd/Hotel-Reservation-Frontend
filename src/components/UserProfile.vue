<template>
  <div class="container">
    <div class="card">
      <h1>User Profile</h1>
      <div v-if="user">
        <p>First Name: {{ user.fname }}</p>
        <p>Last Name: {{ user.lname }}</p>
        <p>Email: {{ user.email }}</p>
        <p>Phone: {{ user.phone }}</p>
        <div>
          <button class="button">Update info</button>
        </div>
        <div>
          <button class="button">Delete account</button>
        </div>
      </div>
      <div v-else>
        <p>No user profile found.</p>
      </div>
    </div>
  </div>

  </template>
  
  <script>
  export default {
    data() {
      return {
        user: null
      };
    },
    mounted() {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        this.user = JSON.parse(storedUser);
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .card {
    background-color: rgb(207, 189, 167);
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 500px;
    text-align: center;
  }
  .button{
    background-color: rgb(125, 93, 42);
    width: 45%;
    color: rgb(254, 254, 254);
    border: 2px black; 
    border-radius: 30px;       
    padding: 15px 35px;    
    text-align: center;    
    text-decoration: none;    
    display: inline-block;    
    font-size: 18px;  
    font-style: italic;
    margin: 5px 100px;    
    cursor: pointer;
    transition-duration: 0.3s;
  }
  .button:hover{
    background-color: rgb(237, 209, 156);
  }
  </style>
  