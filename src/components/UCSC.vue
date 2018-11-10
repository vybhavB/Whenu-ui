<template>
  <div class="UCSC">
    <div class="tabs is-centered is-small" v-if="this.uni === 'UCSC'">
        <ul>
          <li :class="[ diningHall === 'College Nine and Ten' ? 'is-active' : '']"><a @click="changeDining('College Nine and Ten')">College Nine and Ten</a></li>
          <li :class="[ diningHall === 'Cowell and Stevenson' ? 'is-active' : '']"><a @click="changeDining('Cowell and Stevenson')">Cowell and Stevenson</a></li>
          <li :class="[ diningHall === 'Crown and Merrill' ? 'is-active' : '']"><a @click="changeDining('Crown and Merrill')">Crown and Merrill</a></li>
          <li :class="[ diningHall === 'Porter and Kresge' ? 'is-active' : '']"><a @click="changeDining('Porter and Kresge')">Porter and Kresge</a></li>
          <li :class="[ diningHall === 'Rachel Carlson and Oakes' ? 'is-active' : '']"><a @click="changeDining('Rachel Carlson and Oakes')">Rachel Carlson and Oakes </a></li>
      </ul>
    </div>
    <foodSection v-bind:mealPeriod="'Breakfast'" v-bind:timeOfDay="timeOfDay()" v-bind:diningHall="this.diningHall"/>
    <foodSection v-bind:mealPeriod="'Lunch'" v-bind:timeOfDay="timeOfDay()" v-bind:diningHall="this.diningHall"/>
    <foodSection v-bind:mealPeriod="'Dinner'" v-bind:timeOfDay="timeOfDay()" v-bind:diningHall="this.diningHall"/>
    <foodSection v-bind:mealPeriod="'Late Night'" v-bind:timeOfDay="timeOfDay()" v-bind:diningHall="this.diningHall"/>
  </div>
</template>

<script src="../../main.js"></script>
<script>
//import data from "../data";
import FoodSection from "@/components/FoodSection.vue";
var bulmaAccordion = require("../../node_modules/bulma-accordion/dist/js/bulma-accordion.min.js");
export default {
  name: "UCSC",
  components: {
    foodSection: FoodSection
  },
  data() {
    return {
      //foods: data.food,
      diningHall: localStorage.getItem('diningHall') || "College Nine and Ten",
      uni: localStorage.getItem('selectedUniversity')
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
    changeDining: function(dh){
      localStorage.setItem('diningHall',dh);
      this.diningHall = dh;
    },
    toggle: function() {
      bulmaAccordion.attach();
    }
  },mounted() {
    this.toggle();
    // this.changeDining("")
  }
};
</script>
