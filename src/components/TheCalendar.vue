<template>
  <v-row>
    <v-col cols="12" sm="6">
      <v-date-picker v-model="dates" range color="blue"></v-date-picker>
    </v-col>
    <v-col cols="12" sm="6">
      <v-text-field
        v-model="dateRangeText"
        label="Date range"
        prepend-icon="mdi-calendar"
        readonly
      ></v-text-field>
      Chosen dates: {{ dates }}
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    dates: [],
  }),
  computed: {
    dateRangeText() {
      return this.dates.join(" ~ ");
    },
  },
};
</script>

<style scoped></style>
