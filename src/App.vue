<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <find-car />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

import axios from "axios";
import FindCar from "./components/FindCar.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    FindCar,
  },
  data() {
    return {
      token:
        "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOjUsInJlcyI6ImFnZ3JlZ2F0b3IiLCJpYXQiOjE2MzEwMTAwMjN9.YdfhveqPYc98LSxQAiB3Ern3wZFFWKsg5EejtC4q2bo",
      availableAutos: [],
      fetchedData: null,
    };
  },
  methods: {
    fetchData() {
      axios
        .get("http://localhost:8080/api_aggregator/vehicles/", {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
            "Access-Control-Allow-Methods": ("GET", "POST", "OPTIONS"),
            "Access-Control-Allow-Headers":
              ("Origin", "Content - Type", "Accept"),
            Authorization: `Bearer ${this.token}`,
          },
          responseType: "json",
          proxy: {
            protocol: "http",
            host: "192.168.43.176",
            port: 8080,
          },
        })
        .then((res) => {
          this.fetchedData = res.data;
        })
        .catch((err) => console.log(err));
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
