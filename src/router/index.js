import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Hotel from '../components/Hotel.vue'
import AddHotel from '../components/AddHotel.vue'
import Admin from '../components/Admin.vue'
import UpdateHotel from '../components/UpdateHotel.vue'
import DeleteHotel from '../components/DeleteHotel.vue'
import RoomType from '../components/RoomType.vue'
import Reservation from '../components/Reservation.vue'

const Home = () => import('../views/HomeView.vue')
const About = () => import('../views/AboutView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/hotels',
      name: 'Hotel',
      component: Hotel
    },
    {
      path: '/addHotel',
      name: 'AddHotel',
      component: AddHotel
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/updateHotel',
      name: 'UpdateHotel',
      component: UpdateHotel
    },
    {
      path: '/deleteHotel/:id',
      name: 'DeleteHotel',
      component: DeleteHotel
    },
    {
      path: '/roomtypes/hotel/:id',
      name: 'RoomType',
      component: RoomType
    },
    {
      path: '/reservation/:hotelId/:roomTypeId',
      name: 'Reservation',
      component: Reservation
    }
  ]
});

export default router;
