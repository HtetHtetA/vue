<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <router-link class="navbar-brand" :to="{name:'Navbar'}">Navbar</router-link>
    <!-- <a class="navbar-brand" href="#">Navbar</a> -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <router-link class="nav-link active" :to="{name:'Home'}">
            Home
            <span class="visually-hidden">(current)</span>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" :to="{name:'Product'}">Products</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name:'Service'}">Services</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name:'Contact'}">Contact Us</router-link>
        </li>
        <!-- <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
        </li> -->
      </ul>
      <form class="d-flex">
        <input class="form-control me-sm-2" type="search" placeholder="Search">
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
      <!-- <form class="d-flex">
        <input type="text" >
      </form> -->
      <button class="btn btn-warning" @click="$router.push({name:'Signup'})"> Sign Up</button>
      <!-- <button class="btn btn-secondary my-2" @click.prevent="$routergo(-1)">Next</button> -->
    </div>
  </div>
</nav>
<div class="container">
  <router-view></router-view>
</div>
</div>
</template>

<script>

import 'bootstrap/dist/css/bootstrap.min.css'
export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
</style>
