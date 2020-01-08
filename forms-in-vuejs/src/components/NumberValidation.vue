<template>
  <form id="app" @submit="checkForm" novalidate="true">

    <p v-if="errors.length">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-for="(error,index) in errors" :key="index">{{ error }}</li>
      </ul>
    </p>

    <p>
      Given a budget of 100 dollars, indicate how much
      you would spend on the following features for the
      next generation Star Destroyer. Your total must sum up to 100.
    </p>

    <p>
      <input
      v-model.number="weapons"
      type="number"
      name="weapons"
    > Оружие <br/>
      <input
      v-model.number="shields"
      type="number"
      name="shields"
    > Щиты <br/>
      <input
      v-model.number="coffee"
      type="number"
      name="coffee"
    > Кофе <br/>
      <input
      v-model.number="ac"
      type="number"
      name="ac"
    > Кондер <br/>
  </p>

      <p>
       Итого: {{total}}
      </p>

      <p>
        <input
      type="submit"
      value="Submit"
    >
  </p>

  </form>
</template>

<script>
    export default {
        name: 'NumberValidation',
        data(){
            return {
                errors: [],
                weapon: 0,
                shields: 0,
                coffee: 0,
                ac: 0,

            }
        },
        computed: {
            total(){
                return Number(this.weapon) + Number(this.shields) + Number(this.coffee) + Number(this.ac)
            }
        }
    }
</script>

<style>

</style>