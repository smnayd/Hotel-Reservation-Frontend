<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <h3 style="font-style:italic">Register</h3>
                <p style="font-style:italic">Please fill all the fields to create an account.</p>
    
                <label for="fname" style="font-style:italic"><b>First Name</b></label>
                <input v-model="user.fname" ref="fname" type="text" placeholder="Enter First Name" name="fname" style="font-style:italic"/>
    
                <label for="lname" style="font-style:italic"><b>Last Name</b></label>
                <input v-model="user.lname" ref="lname" type="text" placeholder="Enter Last Name" name="lname" style="font-style:italic"/>
    
                <label for="email" style="font-style:italic"><b>Email</b></label>
                <input v-model="user.email" ref="email" type="email" placeholder="Enter Email" name="email" style="font-style:italic"/>
    
                <label for="psw" style="font-style:italic"><b>Password</b></label>
                <input v-model="user.password" ref="psw" type="password" placeholder="Enter Password" name="psw" style="font-style:italic"/>
    
                <label for="phone" style="font-style:italic"><b>Phone</b></label>
                <input v-model="user.phone" ref="phone" type="text" placeholder="Enter Phone" name="phone" style="font-style:italic"/>
    
                <p>By creating an account you agree to our <a href="#" style="color: dodgerblue" @click="showTermsModal">Terms & Privacy</a>.</p>
    
                <div v-if="showModal" class="modal">
                    <div class="modal-content">
                      <h2>Terms & Privacy</h2>
                      <!-- Terms & Privacy content goes here -->
                        <p> User Responsibilities </p>
                        <p>                        
                        1.1. User Account: User must create a valid account to access and use the Services. User agrees to provide accurate and complete information during the registration process. </p>
    
                        <p>
                         Reservation and Payment
                        </p>
                        <p>
                            2.1. Booking: User can make hotel reservations through the Services. User agrees to provide accurate and up-to-date information during the reservation process.
                        </p>
                        <p>
                            2.2. Payment: User will be responsible for all charges incurred for the reservations made through the Services. User agrees to provide valid payment information and authorize the Company to charge the applicable fees.
                        </p>
                        <p>
                            2.3. Cancellation and Refunds: User acknowledges that cancellation policies may vary for each reservation. User agrees to review and comply with the cancellation policy provided by the hotel. Refunds, if applicable, will be subject to the terms and conditions of the hotel and the Company's refund policy.
                        </p>
                        <p>
                            Privacy
                        </p>
                        <p>
                            4.1. Data Collection: User acknowledges and agrees that the Company may collect and use personal data in accordance with its Privacy Policy. User's personal information will be handled securely and in compliance with applicable privacy laws.
                        </p>                                              
                        <p>                    
                        4.2. Cookies: The Services may use cookies to enhance the user experience. User can manage cookie preferences through their browser settings.</p>
    
                      <button class="accept" @click="acceptTerms">Accept</button>
                    </div>
                  </div>
                
    
                <div class="clearfix">
                    <button class="button" @click="signup()">Submit</button>
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
            user:{
                fname:"",
                lname:"",
                email:"",
                password:"",
                email: ""
            },
            showModal:false
        }
    },
    methods: {
        showTermsModal(){
            this.showModal = true;
        },
        acceptTerms(){
            this.showModal = false;
        },
        signup(){
                if(this.checkValidation()){
                    this.$ajax.post("users/register/", {fname:this.user.fname, lname:this.user.lname, 
                        password:this.user.password, email:this.user.email, phone:this.user.phone})
                    .then(response => {
                        if(response.data){
                            Swal.fire("Successfully registered")
                            .then(()=>{
                                this.$router.push('/login');
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
            if(!this.user.fname){
                    this.$refs.fname.focus();
                    Swal.fire("Give firstname!");
                    return;
                }

            if(!this.user.lname){
                    this.$refs.lname.focus();
                    Swal.fire("Give lastname!");
                    return;
                }
            if(!this.user.email){
                    this.$refs.email.focus();
                    Swal.fire("Give email!");
                    return;
                }
            if(!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/).test(this.user.email)){
                this.$refs.email.focus();
                Swal.fire("Give a correct email!");
                return;
            }
            if(!this.user.password){
                this.$refs.psw.focus();
                Swal.fire("Give password!");
                return;
            }
            if(!this.user.phone){
                    this.$refs.phone.focus();
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