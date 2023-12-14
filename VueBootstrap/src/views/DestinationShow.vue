<template>
  <section class="destination  text-center py-5 px-5">
    <h1 class="display-1 fw-bold text-white">{{ destination.name }}</h1>    <div class="row justify-content-center align-items-center">
      <div class="col-md-6 text-center py-5">
        <img :src="`/images/${destination.image}`" :alt="destination.name" class="img-fluid" />
      </div>
      <div class="col-md-6 ">
        <p class="fw-bold fs-5 text-white" style="background-color: rgba(64, 64, 64, 0.75);">{{ destination.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import sourceData from "@/data.json";

export default {
  computed: {
    destinationId() {
      return parseInt(this.$route.params.id);
    },
    destination() {
      return sourceData.destinations.find(
        (destination) => destination.id === this.destinationId
      );
    },
  },
};
</script>

<style>

@import 'bootstrap/dist/css/bootstrap.min.css';
</style>
