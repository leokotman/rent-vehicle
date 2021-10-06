<template>
  <v-card class="mx-auto" tile>
    <v-list rounded>
      <v-subheader>Available cars</v-subheader>
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item v-for="(car, i) in vehicles" :key="i">
          <v-list-item-icon>
            <v-icon>mdi-car-hatchback</v-icon>
            <img :src="car.image.thumb_url" class="car_img" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              >Model: {{ car.vehicle_model.name }}</v-list-item-title
            >
            <v-list-item-subtitle> №: {{ car.id }}</v-list-item-subtitle>
            <p>Car type: {{ car.car_type }}</p>
            <p>Fuel: {{ car.fuel_type }}</p>
            <p>License: {{ car.license }}</p>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: {
    vehicles: Array,
  },
  data: () => ({
    selectedItem: 0,
  }),
};
</script>

<style scoped>
.car_img {
  width: 40px;
  height: 40px;
}
.v-list-item__subtitle, .v-list-item__title {
  white-space: pre-wrap;
}
</style>
