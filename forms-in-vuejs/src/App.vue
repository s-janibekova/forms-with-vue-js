<template>
    <div class="container">
        <value-binding />
    </div>
</template>

<script>
import FormValidations from '@/components/FormValidations.vue';
import BasicForm from './components/BasicForm.vue'
import ValueBinding from '@/components/ValueBinding.vue';
export default {
    name: 'app',
    components: {
        BasicForm,
        FormValidations,
        ValueBinding
    }
};
</script>

<style>

</style>