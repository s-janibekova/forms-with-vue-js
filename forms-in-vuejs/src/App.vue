<template>
    <div class="container">
        <FormValidations />
    </div>
</template>

<script>
import FormValidations from '@/components/FormValidations.vue';
import BasicForm from './components/BasicForm.vue'
export default {
    name: 'app',
    components: {
        BasicForm,
        FormValidations
    }
};
</script>
