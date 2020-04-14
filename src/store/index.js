import Vuex from 'vuex';
import Vue from 'vue';
import filters from './filters'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        filters
    }
})