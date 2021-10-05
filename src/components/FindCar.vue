<template>
  <section>
    <v-card class="mx-auto my-12" width="400px">
      <img height="250" src="../assets/img/car.jpeg" />

      <v-card-title>Find your car</v-card-title>

      <v-card-text>
        <div>Click on the dates below to find the available cars</div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-text>
        <v-chip-group class="blue" active-class="deep-purple accent-4" column>
          <v-chip class="blue">5:30PM</v-chip>

          <v-chip>7:30PM</v-chip>

          <v-chip>8:00PM</v-chip>

          <v-chip>9:00PM</v-chip>
        </v-chip-group>
      </v-card-text>

      <v-card-actions>
        <v-btn color="deep-purple lighten-2" text @click="handleShowCars">
          {{ carsShown ? "Hide" : "Show cars" }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </section>
</template>

<script>
export default {
  emits: ["showCars"],
  props: {
    carsShown: Boolean,
  },
  data() {
    return {};
  },
  methods: {
    handleShowCars() {
      this.$emit("showCars");
    },
  },
};
</script>

<style scoped>
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
