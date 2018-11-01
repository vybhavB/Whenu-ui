<template>
  <div class="homeview">
    <div class = "container is-full-hd">
        <foodSection v-bind:mealPeriod="'Breakfast'" v-bind:timeOfDay="timeOfDay()"/>
        <foodSection v-bind:mealPeriod="'Lunch'" v-bind:timeOfDay="timeOfDay()"/>
        <foodSection v-bind:mealPeriod="'Dinner'" v-bind:timeOfDay="timeOfDay()"/>
        <foodSection v-bind:mealPeriod="'Late Night'" v-bind:timeOfDay="timeOfDay()"/>
    </div>
  </div>
</template>

<script src="../../main.js"></script>
<script>
//import data from "../data";
import FoodSection from "@/components/FoodSection.vue";
var bulmaAccordion = require("../../node_modules/bulma-accordion/dist/js/bulma-accordion.min.js");
export default {
  name: "HomeView",
  components: {
    foodSection: FoodSection
  },
  data() {
    return {
      //foods: data.food,
    }
  },
  methods: {
    timeOfDay: function() {
      var now = new Date();
      var hours = now.getHours();
      if (hours < 11) {
        return "Breakfast";
      } else if (hours < 18) {
        return "Lunch";
      } else if (hours < 21) {
        return "Dinner";
      } else {
        return "Late Night";
      }
    },
    toggle: function() {
      bulmaAccordion.attach();
    }
  },mounted() {
    this.toggle();
  }
};
</script>
