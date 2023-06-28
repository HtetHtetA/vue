<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-2">
                    <select name="" id="" class="form-select" @change="filterProducts" v-model="category">
                        <option value="all">All</option>
                        <option :value="index" v-for="category,index in categories" :key="index" class="text-uppercase">{{ category }}</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-md-2 my-3" v-for="product,index in filter_products" :key="index">
                    <div class="card cardheight" >
                        <img :src="product.image" class="card-img-top imgstyle" >
                        <div class="card-body">
                            <h5 class="card-title text-truncate">{{ product.title }}</h5>
                            <h6 class="card-title">{{ product.price }}</h6>
                            <p class="card-text text-truncate">{{ product.description }}</p>
                            <a href="#" class="btn btn-primary">See Detail</a>
                        </div>
</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

    export default{
        name:'ProductPage',
        data(){
            return{
                products:[],
                categories:[],
                category:'all',
                filter_products:[],
            }
        },
        created(){
                axios.get('https://fakestoreapi.com/products')
                .then(response => this.filter_products=response.data)
                .then(data=>this.products=data)
                axios.get('https://fakestoreapi.com/products/categories')
                .then(response=>this.categories=response.data)
                // this.filter_products=this.products;

        },
        methods:{
            filterProducts()
            {
                // let cat_name='';
                if(this.category!='all')
                {
                    // cat_name=this.categories[this.category]
                    // this.filter_products=this.products.filter(product=>product.category===cat_name)
                    this.filter_products=this.products.filter(product=>product.category===this.categories[this.category])
                    // console.log(this.products)
                }
                else{
                    this.filter_products=this.products
                }

            }
        }

    } 
</script>


<style scoped>
.imgstyle{
    width: 100%;
    height: 180px;
    padding: 10px
};
.cardheight{
    height: 300px;
};
.uppercase{
    text-transform: capitalize
}
</style>