<template>
  <div class="homeview">
    <div class = "container is-full-hd">
      <UCSC v-if="currentCollege == 'UCSC'"></UCSC>
    </div>
  </div>
</template>

<script src="../../main.js"></script>
<script>
//import data from "../data";
import UCSCVue from '../components/UCSC.vue';
export default {
  name: "HomeView",
  components: {
    UCSC: UCSCVue
  },
  data() {
    return {
      //foods: data.food,
      currentCollege: localStorage.getItem('selectedUniversity')
    }
  },
  methods: {

  },mounted() {
  },beforeMount(){
    this.currentCollege = localStorage.getItem('selectedUniversity') || localStorage.setItem('selectedUniversity', 'UCSC');
  }
};
</script>