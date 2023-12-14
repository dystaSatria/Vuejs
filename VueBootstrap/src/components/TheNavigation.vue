<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
    <router-link class="navbar-brand text-white" to="/">Gezi Rehberi</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" @click="toggleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" :class="{ 'show': isNavbarOpen }" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li v-for="destination in destinations" :key="destination.id" class="nav-item">
          <router-link
            class="nav-link text-white"
            :to="{ name: 'destination.show', params: { id: destination.id } }"
            active-class="vue-travel-active-link"
            id="navLink"
          >
            {{ destination.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import sourceData from "@/data.json";

export default {
  data() {
    return {
      destinations: sourceData.destinations,
      isNavbarOpen: false,
    };
  },
  methods: {
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    },
  },
};
</script>
<style lang="scss">
@import 'bootstrap/scss/bootstrap';
.nav-link.vue-travel-active-link {
  color: green !important;
}
#navLink:hover {
  color: green; 
}
</style>
