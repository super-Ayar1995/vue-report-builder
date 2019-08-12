import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '@/views/home.vue';
import LoginView from '@/views/auth/login.vue';
import RegisterView from '@/views/auth/register.vue';
import ForgotView from '@/views/auth/forgot.vue';
import ProfileView from '@/views/profile.vue';
import SettingView from '@/views/setting.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'Index',
        component: HomeView
    },{
        path: '/home',
        name: 'Home',
        component: HomeView
    }, {
        path: '/login',
        name: 'Login',
        component: LoginView
    }, {
        path: '/register',
        name: 'Register',
        component: RegisterView
    }, {
        path: '/forgot',
        name: 'Forgot',
        component: ForgotView
    }, {
        path: '/profile',
        name: 'Profile',
        component: ProfileView
    }, {
        path: '/setting',
        name: 'Setting',
        component: SettingView
    }, {
        path: '*',
        name: '*',
        component: HomeView
    }]
});