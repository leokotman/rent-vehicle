<template>
  <v-app id="app">
    <h1>Rent - a - Car</h1>
    <find-car
      @showCars="showCars"
      :carsShown="carsShown"
      @calendarToggle="toggleCalendar"
      :calendarShown="calendarShown"
    />
    <cars-list v-if="carsShown" :vehicles="fetchedData.vehicles" />
    <the-calendar v-show="calendarShown" />
  </v-app>
</template>

<script>
import axios from "axios";
import CarsList from "./components/CarsList.vue";
import FindCar from "./components/FindCar.vue";
import TheCalendar from "./components/TheCalendar.vue";

export default {
  name: "App",
  components: {
    FindCar,
    CarsList,
    TheCalendar,
  },
  data() {
    return {
      token:
        "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOjUsInJlcyI6ImFnZ3JlZ2F0b3IiLCJpYXQiOjE2MzEwMTAwMjN9.YdfhveqPYc98LSxQAiB3Ern3wZFFWKsg5EejtC4q2bo",
      fetchedData: null,
      carsShown: false,
      calendarShown: false,
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
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
    showCars() {
      this.carsShown = !this.carsShown;
    },
    toggleCalendar() {
      this.calendarShown = !this.calendarShown;
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
}
#app .v-application--wrap {
  margin: 2% auto 2%;
  width: 80%;
  max-width: 900px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex: none;
  min-height: unset;
}
h1 {
  font-size: 1.5rem;
  width: 80%;
}
</style>
