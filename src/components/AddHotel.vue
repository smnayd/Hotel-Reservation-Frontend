<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <h3 style="font-style:italic">Add Hotel</h3>
                <p style="font-style:italic">Please fill all the fields to create an hotel.</p>
    
                <label for="hotelName" style="font-style:italic"><b>Hotel Name</b></label>
                <input v-model="hotel.hotelName" ref="hotelName" type="text" placeholder="Enter Hotel Name" name="hotelName" style="font-style:italic"/>
    
                <label for="country" style="font-style:italic"><b>Country</b></label>
                <input v-model="hotel.country" ref="country" type="text" placeholder="Enter Country" name="country" style="font-style:italic"/>
    
                <label for="city" style="font-style:italic"><b>City</b></label>
                <input v-model="hotel.city" ref="city" type="text" placeholder="Enter City" name="city" style="font-style:italic"/>
    
                <label for="address" style="font-style:italic"><b>Address</b></label>
                <input v-model="hotel.address" ref="address" type="text" placeholder="Enter Address" name="address" style="font-style:italic"/>
    
                <label for="phone" style="font-style:italic"><b>Phone</b></label>
                <input v-model="hotel.phone" ref="phone" type="text" placeholder="Enter Phone" name="phone" style="font-style:italic"/>
                
                <label for="rating" style="font-style:italic"><b>Rating</b></label>
                <input v-model="hotel.rating" ref="rating" type="number" placeholder="Enter Rating" name="rating" style="font-style:italic" max="5" min="1"/>
                <br><br>
                <label for="image" style="font-style:italic"><b>Image</b></label>
                <input v-model="hotel.image" ref="image" type="text" placeholder="Enter Image" name="image" style="font-style:italic"/>
       
                
                <div class="clearfix">
                    <button class="button" @click="add()">Add</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2';

export default{
    data(){
        return{
            hotel:{
                hotelName:"",
                country:"",
                city:"",
                address:"",
                phone: "",
                rating:null,
                image:""
            },
            showModal:false
        }
    },
    methods: {
        add(){
                if(this.checkValidation()){
                    this.$ajax.post("hotels", {hotelName:this.hotel.hotelName, country:this.hotel.country, 
                        city:this.hotel.city, address:this.hotel.address, phone:this.hotel.phone, rating:this.hotel.rating, 
                        image:this.hotel.image})
                    .then(response => {
                        if(response.data){
                            Swal.fire("Successfully added.")
                            .then(()=>{
                                this.$router.push('/hotels');
                            });
                        }else{
                            Swal.fire("Error: Something went wrong.(You cannot create an account with an existing email address!");
                        }
                    })
                    .catch(error=> {
                        if(error.response){
                            Swal.fire(error.response.data);
                        }
                    });
                }
        },
        checkValidation(){
            if(!this.hotel.hotelName){
                    this.$refs.hotelName.focus();
                    Swal.fire("Give hotel name!");
                    return;
                }

            if(!this.hotel.country){
                    this.$refs.country.focus();
                    Swal.fire("Give country!");
                    return;
                }
            if(!this.hotel.city){
                    this.$refs.city.focus();
                    Swal.fire("Give city!");
                    return;
                }            
            if(!this.hotel.address){
                this.$refs.address.focus();
                Swal.fire("Give address!");
                return;
            }
            if(!this.hotel.phone){
                    this.$refs.phone.focus();
                    Swal.fire("Give Correct Phone!");
                    return;
            }
            if(!this.hotel.image){
                    this.$refs.image.focus();
                    Swal.fire("Give Correct Phone!");
                    return;
            }
            return true;
        }
    }
}
</script>

<style scoped>
@import '../styles/Register.css';
  
</style>