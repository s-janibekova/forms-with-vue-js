<template>
    <div>
     <div class="container">
         <h2 class="title"> Links </h2>
         <router-link class="route" to="/BasicForm">Basic Form</router-link>  |
        <router-link class="route" to="/FormValidations">Form Validations</router-link> |
        <router-link class="route" to="/ValueBinding">Value Binding</router-link> |
        <router-link class="route" to="/BasicForm">Number Validation</router-link> |
    </div>
     <router-view />
 </div>
</template>

<script>
import FormValidations from '@/components/FormValidations.vue';
import BasicForm from './components/BasicForm.vue'
import ValueBinding from '@/components/ValueBinding.vue';
import NumberValidation from '@/components/NumberValidation.vue';
export default {
    name: 'app',
    components: {
        BasicForm,
        FormValidations,
        ValueBinding,
        NumberValidation
    }
};
</script>

<style>
.container {
    padding: 3%;
    text-align: center;

}
.route {
    color: #004445;
    font-family: 'Gelasio', serif;
    }

.title {
    color: #2c786c;
}

body {
    text-align: center;
}

</style>