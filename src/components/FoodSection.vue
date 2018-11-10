<template>

  <div class="FoodSection">
    <section class="accordions">
      <article class="accordion" style="background-color:white" :class="{'is-active':(mealPeriod===timeOfDay)}">
        <div class="accordion-header toggle">
          <p>{{mealPeriod}}</p>
        </div>
        <div class="accordion-body">
          <div class="accordion-content" style="padding:0;">
            <div class="panel">
              <div class="panel-block" v-for="elem in this.foods" v-bind:key="elem.name">
                <span class="tag is-primary" id="section" v-if="elem.attributes.section">{{elem.attributes.section}}</span>
                  <p class="is-size-6-mobile">{{elem.name}}</p>
                <div class="tags is-right">
                  <span v-if="elem.badges.vegetarian" class="tag is-success">Vegetarian</span>
                  <span v-if="elem.badges.vegan" class="tag is-success">Vegan</span>
                  <span v-if="elem.badges.halal" class="tag is-danger">Halal</span>
                  <span v-if="elem.badges.has_fish" class="tag is-info">Fish</span>
                  <span v-if="elem.badges.has_nuts" class="tag is-black">Nuts</span>
                  <span v-if="elem.badges.has_soy" class="tag is-dark">Soy</span>
                  <span v-if="elem.badges.has_egg" class="tag is-warning">Eggs</span>
                  <span v-if="elem.badges.has_dairy" class="tag is-light">Dairy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

    </section>
  </div>
</template>

<script>
// import bulmaAccordion from "../../node_modules/bulma-accordion/dist/js/bulma-accordion.min.js";
import {foodRef} from '../firebase.js';
var moment = require('moment');
export default {
  name: "FoodSection",
  props: ['mealPeriod', 'timeOfDay', 'diningHall'],
  components: {
  },
  data() {
    return {
      foods: [],
      selectedUni: localStorage.getItem('selectedUniversity') || 'UCSC'
    };
  },
  methods: {
    // toggle: function() {
    //   bulmaAccordion.attach();
    // },
    getFoodFromFirebase: function(){
      return new Promise((resolve, reject)=>{
        foodRef.child(this.selectedUni.toLowerCase()+'/'+moment().format('YYYY-MM-DD')).on('value', (snapshot)=>{
          let foodData = JSON.parse(snapshot.val());
          if(foodData){
            let food = [];
            foodData.forEach(element => {
              if(element.meal_period === this.mealPeriod && element.dining_hall === this.diningHall){
                food.push(element)
              }
            });
            resolve(food)
          }else{
            reject("error")
          }
          // console.log(foodData);
        });
      });
    }
  },mounted(){
    // bulmaAccordion.attach();
  },beforeMount(){
    this.getFoodFromFirebase().then((result)=>{
      if(result){
        this.foods = result;
        console.log(this.foods);
      }else{
        console.error("Error in promise");
      }

    })
  }
};
</script>
