<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar
  },data(){
    return{
    }
  },methods: {
    
  },mounted(){

  }
};
</script>


<style lang="scss">
  @import './assets/css/app.scss';
</style>
