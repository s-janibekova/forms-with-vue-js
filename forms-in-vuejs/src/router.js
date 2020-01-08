import Vue from 'vue'
import Router from 'vue-router'
import BasicForm from '@/components/BasicForm.vue';
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path : '/BasicForm',
          name: BasicForm,
          component: BasicForm
        },
        {
            path: '/ValueBinding',
            name: 'ValueBinding',
            component: () => import('@/components/ValueBinding.vue'),
        },
        {
            path: '/NumberValidation',
            name: 'NumberValidation',
            component: () => import('@/components/NumberValidation.vue'),
        },
        {
            path:'/FormValidations',
            name: 'FormValidations',
            component: () => import('@/components/FormValidations.vue')
        }
    ]
})