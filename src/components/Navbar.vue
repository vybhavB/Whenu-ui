<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="container is-full-hd">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <span class="is-size-4">WhenU</span>
        </router-link>

        <div class="navbar-burger burger" :class="{ 'is-active': active }" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="navbar-menu is-primary" :class="{ 'is-active': active }">

        <div class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link is-size-6">
              {{this.selectedUni}}
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item" active-class="is-active" v-for="uni in this.place" v-bind:key="uni" @click="setUni(uni)">
                {{uni}}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import {foodRef} from '../firebase.js';
export default {
  name: "Navbar",
  data() {
    return {
      place: [],
      active: false,
      selectedUni: 'UCSC'
    };
  },
  methods: {
    closeMenu() {
      this.active = false;
    },
    toggleMenu() {
      this.active = !this.active;
    },
    getUni() {
      const universities = [];
      foodRef.once("value").then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          universities.push(childSnapshot.key.toUpperCase());
        });
        localStorage.setItem('university', JSON.stringify(universities));
      });
    },
    setUni(uni) {
      this.selectedUni = uni;
      localStorage.setItem('selectedUniversity', uni)
    }
  },
  mounted() {
    if (localStorage.getItem('university')) {
      this.place = JSON.parse(localStorage.getItem('university'));
    }
  },
  beforeMount() {
    this.getUni();
    if (localStorage.getItem('selectedUniversity')) {
      this.selectedUni = localStorage.getItem('selectedUniversity');
    }
  }
};
</script>