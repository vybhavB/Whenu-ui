<template>

  <div class="FoodSection">
    <section class="accordions">
      <article class="accordion" :class="{'is-active':(mealPeriod===timeOfDay)}">
        <div class="accordion-header toggle">
          <p>{{mealPeriod}}</p>
        </div>
        <div class="accordion-body">
          <div class="accordion-content">
            {{this.food}}
          </div>
        </div>
      </article>

    </section>
  </div>
</template>

<script>
// import bulmaAccordion from "../../node_modules/bulma-accordion/dist/js/bulma-accordion.min.js";
import {foodRef} from '../firebase.js';
export default {
  name: "FoodSection",
  props: ['mealPeriod', 'timeOfDay'],
  components: {
  },
  data() {
    return {
      food:'Hello'
    };
  },
  methods: {
    // toggle: function() {
    //   bulmaAccordion.attach();
    // },
    getFood: function(date, timeOfDay){
      foodRef.child(localStorage.getItem('selectedUniversity').toLowerCase()).once('value').then(function(snapshot){
        snapshot.forEach(function(daySnapshot){
          console.log(daySnapshot.val())
        });
      });

    }
  },mounted(){
    // bulmaAccordion.attach();
  },beforeMount(){
    this.getFood();
  }
};
</script>
