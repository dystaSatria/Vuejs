<template>
  <div class="app" :style="backgroundStyle">
    <TheNavigation />
    <div class="container">
      <router-view></router-view>
    </div>
    <footer class=" text-white text-center py-5">
      <p>&copy;2023 SPA | Gezi Rehberi</p>
    </footer>
  </div>
</template>

<script>
import TheNavigation from "@/components/TheNavigation.vue";

export default {
  components: { TheNavigation },
  data() {
    return {
      backgroundStyle: {
        backgroundImage: "url('/images/background.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      },
    };
  },
};
</script>

<style>
@import 'bootstrap/dist/css/bootstrap.min.css';
</style>
