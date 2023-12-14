<template>
  <div class="home bg-transparent">
    <div class="jumbotron text-center py-5 mb-5">
      <h1 class="display-4 mb-4 text-white">Single Page Application</h1>
      <p class="lead text-white">
       İcabi Kırgız | Reza Dysta Satria | Selim Tekin | Yavuz Koz
      </p>
      <p class="lead">
        <small class="text-muted"> 1200505011 | 5200505062 | 1200505024 | 1200505069 </small>
      </p>
    </div>

    <div class="container">
      <div class="row justify-content-center mt-5">
        <div v-for="destination in destinations" :key="destination.id" class="col-md-4 mb-4">
          <router-link :to="{ name: 'destination.show', params: { id: destination.id } }" class="text-decoration-none text-dark">
            <div class="card bg-transparent border-0">
              <div class="card-hover">
                <div class="img-wrapper" >
                  <div class="d-flex justify-content-center align-items-center"> 
                    <img :src="`/images/${destination.image}`" :alt="destination.name" class="card-img-top" />
                  </div>
                  <div class="img-overlay">
                    <div class="card-body">
                      <h5 class="card-title text-white text-bold">{{ destination.name }}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>

   
  </div>
</template>

<script>
import sourceData from "@/data.json";

export default {
  data() {
    return {
      destinations: sourceData.destinations,
    };
  },
};
</script>

<style>

@import 'bootstrap/dist/css/bootstrap.min.css';

.home {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0;
  background-image: none !important; 
}

.card {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
}

.card-hover {
  position: relative;
  overflow: hidden;
}

.img-wrapper {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.jumbotron {
  background: transparent linear-gradient(to right, #000000, #ffffff) repeat scroll 0% 0%;3
}

.img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover; 
  transition: transform 0.5s ease;
}

.img-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.card-hover:hover .img-overlay {
  opacity: 1;
}

.card-hover:hover img {
  transform: scale(1.1);
}

.card-title {
  color: white;
  text-align: center;
}

.card-body {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  transition: opacity 0.5s ease;
  opacity: 0;
}

.card-hover:hover .card-body {
  opacity: 1;
}
</style>
