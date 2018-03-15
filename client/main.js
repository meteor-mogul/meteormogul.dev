// Create a Vue instance that uses Vuetify and Vue Router

// First, import symbols from packages.
import { Vue } from 'meteor/meteormogul:vue-dist';
import { Vuetify } from 'meteor/meteormogul:vuetify-dist';
import { VueRouter } from 'meteor/meteormogul:vue-router-dist';

// Use Vuetify for style and UI widgets.
Vue.use(Vuetify);

// Use Vue Router for routes.
// We're using client-side routes, which just changes state of app in browser.
// With client-side routes, server does not get involved.
// Server just delivers a Single Page App, then browser runs JavaScript to
// provide app functionality.
Vue.use(VueRouter);

// Declare two templates for two routes, Happy and Sad.
// Templates must have one enclosing tag.
const Happy = { template: '<v-icon>mood</v-icon>'};
const Sad = { template: '<v-icon>mood_bad</v-icon>'};

// Declare Happy and Sad routes...
const routes = [
  { path: '/happy', component: Happy },
  { path: '/sad', component: Sad }
];

// ... then add them to the router ...
const router = new VueRouter({
  routes // short for `routes: routes`
});

// ... then inject the router into the Vue instance.
// This Vue instance uses the template with id="app-template".
// We're getting fancy with the $mount API.
// See https://vuejs.org/v2/api/#vm-mount
vm = new Vue({
    router,
    template: '#app-template',
    data: {
      message: 'Getting started...'
    }
}).$mount('#app');
