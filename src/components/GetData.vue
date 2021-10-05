<template>
  <div></div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      token:
        "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOjUsInJlcyI6ImFnZ3JlZ2F0b3IiLCJpYXQiOjE2MzEwMTAwMjN9.YdfhveqPYc98LSxQAiB3Ern3wZFFWKsg5EejtC4q2bo",
    };
  },
  methods: {
    getdata() {
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
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    },
  },
  created() {
    this.getdata();
  },
};
</script>

<style scoped></style>
