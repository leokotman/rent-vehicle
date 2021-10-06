<template>
  <section>
    <v-card class="mx-auto" width="400px">
      <img height="250" src="../assets/img/car.jpeg" />

      <v-card-title>Find your car</v-card-title>

      <v-card-text>
        <div>Click on the dates below to find the available cars</div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-text>
        <v-chip-group
          class="blue lighten-5"
          active-class="deep-purple accent-1"
          column
        >
          <v-chip>Today</v-chip>
          <v-chip>Tomorrow</v-chip>
          <v-chip @click="toggleCalendar"
            >{{ calendarShown ? "Hide" : "Show" }} calendar</v-chip
          >
        </v-chip-group>
      </v-card-text>

      <v-card-actions>
        <v-btn
          color="deep-purple lighten-1"
          elevation="2"
          text
          @click="handleShowCars"
        >
          {{ carsShown ? "Hide" : "Show cars" }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </section>
</template>

<script>
export default {
  emits: ["showCars", "calendarToggle"],
  props: {
    carsShown: Boolean,
    calendarShown: Boolean,
  },
  data() {
    return {
      today: "",
      tomorrow: "",
    };
  },
  methods: {
    handleShowCars() {
      this.$emit("showCars");
    },
    getToday() {
      //   let date = new Date();
      //   let day = date.getDate();
      //   let month = date.getMonth() + 1;
      //   let year = date.getFullYear();

      const today = new Date();
      this.today = today;
      const tomorrow = new Date(today);
      this.tomorrow = tomorrow.setDate(tomorrow.getDate() + 1);
    },
    toggleCalendar() {
      this.$emit("calendarToggle");
    },
  },
  created() {
    this.getToday();
  },
};
</script>

<style scoped>
.v-chip-group {
  border-radius: 10px;
}
img {
  background-size: cover;
  width: 100%;
}
@media screen and (max-width: 380px) {
  img {
    background-size: contain;
    width: auto;
  }
}
</style>
