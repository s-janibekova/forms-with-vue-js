<template>
     <div class="form-group">
         <h3> Простая формочка </h3>
        <select v-model="selected" class="form-control">
            <!-- use v-for for the options -->
            <option v-for="(option, index) in options" :key="index" :value="option.value">{{option.text}}</option>
        </select>
        <p>Selected {{ selected}} </p>

        <input v-model.number="age" type="number" class="form-control"/>
        <p>Age : {{age}} </p>
        
        <input v-model.trim="msg" type="text" name="" id="" class="form-control"/>
        <p>Message: {{msg}} </p>
    </div>
</template>

<script>
    export default {
        name: 'ValueBidning',
        data() {
            return {
                selected: 'A',
                age: '',
                msg: '', 
                options: [
                         { text: 'One', value: 'A' },
                         { text: 'Two', value: 'B' },
                         { text: 'Three', value: 'C' },
                         { text: 'Four', value: 'D' },
                ]
            }
        }
        
    }
</script>

<style>
    .form-group {
        font-family: 'Gelasio', serif;
        text-align: center;
        padding: 6%;
    }

</style>