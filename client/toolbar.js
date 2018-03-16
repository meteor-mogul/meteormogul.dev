// Create a Vue component for the toolbar

// First, import symbols from packages.
import { Vue } from 'meteor/meteormogul:vue-dist';
import { Vuetify } from 'meteor/meteormogul:vuetify-dist';
import { VueRouter } from 'meteor/meteormogul:vue-router-dist';
import VueMeteorTracker from 'vue-meteor-tracker';
import { mmMixin } from './mixins.js';

Vue.use(VueMeteorTracker);
Vue.use(Vuetify);
Vue.use(VueRouter);

var mmToolbar = Vue.component('mm-toolbar',
{
  name: 'mm-toolbar',
  template: '#mm-toolbar-template',
  mixins: [mmMixin]
});

export { mmToolbar };
