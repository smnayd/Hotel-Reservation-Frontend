<template>
  <div class="container">
    <div class="card">
      <h1>User Profile</h1>
      <div v-if="user">
        <p>Ad: {{ user.fname }}</p>
        <p>Soyad: {{ user.lname }}</p>
        <p>E-posta: {{ user.email }}</p>
        <p>Telefon: {{ user.phone }}</p>
        <div>
          <button class="button" @click="updateInfo()">Update Info</button>
        </div>
        <div>
          <button class="button" @click="confirmDeleteAccount()">Delete Account</button>
        </div>
      </div>
      <div v-else>
        <p>No user found.</p>
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
  },
  methods: {
    updateInfo() {
  const updatedUser = { ...this.user };
  if (confirm("Do you want to update your first name?")) {
    updatedUser.fname = prompt("New first name:", updatedUser.fname);
  }
  if (confirm("Do you want to update your last name?")) {
    updatedUser.lname = prompt("New last name:", updatedUser.lname);
  }
  if (confirm("Do you want to update e-mail?")) {
    updatedUser.email = prompt("New e-mail:", updatedUser.email);
  }
  if (confirm("Do you want to update phone?")) {
    updatedUser.phone = prompt("New phone:", updatedUser.phone);
  }

  this.user = updatedUser;

  localStorage.setItem("user", JSON.stringify(this.user));
 },
    confirmDeleteAccount() {
      if (confirm("Are you sure to delete your account?")) {
        this.deleteAccount();
      }
    },
    deleteAccount() {
      this.user = null;
      localStorage.removeItem('user');
    }
  }
};
</script>

<style scoped>
@import '../styles/UserProfile.css';
</style>
