import { createRouter,createWebHistory } from "vue-router";
import HomePage from '../views/HomePage'
import ProductPage from '../views/ProductPage'
import ServicePage from '../views/ServicePage'
import ContactPage from '../views/ContactPage'
import NavbarPage from '../views/NavbarPage'
import ErrorPage from '../views/ErrorPage'
import SignupPage from '../views/SignupPage'
const router=createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            name:'Home',
            component:HomePage
        },
        {
            path:'/product',
            name:'Product',
            component:ProductPage
        },
        {
            path:'/service',
            name:'Service',
            component:ServicePage
        },
        {
            path:'/contact',
            name:'Contact',
            component:ContactPage
        },
        {
            path:'/navbar',
            name:'Navbar',
            component:NavbarPage
        },
        {
            path:'/:catchAll(.*)',
            name:'Error',
            component:ErrorPage
        },
        {
            path:'/signup',
            name:'Signup',
            component:SignupPage
        }
    ]
})
export default router