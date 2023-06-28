<template>
    <div>
        <!-- Signup Page -->
        <div class="container">
            <div class="row">
                <div class="col-md-6" border-gray>
            <form @submit.prevent="signup">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">User Name</label>
                    <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter username" v-model="FormData.username">
                    <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="email address" v-model="FormData.email">
                    <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" v-model="FormData.password">
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input">
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
        </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
    export default {
        name:'SignupPage',
        data(){
            return{
                FormData:{
                    username:'',
                    email:'',
                    password:'',
                }
            }
        },
        methods:{
            signup(){
                console.log(this.FormData)
                axios.post('http://localhost:3000/user',this.FormData)
                this.FormData={
                    username:'',
                    email:'',
                    password:'',
                }
            }
        }
    }
</script>

<style scoped>

</style>