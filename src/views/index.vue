<script>
import { vBTooltip } from "bootstrap-vue-next";

export default {
  directives: {
    vBTooltip,
  },

  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
* {
  color: white;
  /* font-size: large;
    font-weight: 600; */
}

.bg1 {
  background-image: url("../assets/darth1.png");
  background-size: auto;
}

.bg2 {
  background-image: url("../assets/luke1.png");
  background-size: auto;
}

.bg3 {
  background-image: url("../assets/han1.png");
  background-size: auto;
}
.bg4 {
  background-image: linear-gradient(to right, red, blue);
  background-size: auto;
}

/* #höjd {
    height: 500px;
    width: auto;
} */
</style>

<!--
class="mt-5" = margin-top + värde
--''--"mb-5" = margin-bottom + värde
-->

<template>
  <BContainer fluid>
    <BCol class="d-flex justify-content-center col">
      <BRow v-b-tooltip.click.bottom title="hej" class="bg1">
        <h1>1st</h1>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </BRow>
    </BCol>
    <BCol class="d-flex justify-content-center col">
      <BRow class="bg2">
        <h1>2nd</h1>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </BRow>

      <BRow class="bg3">
        <h1>3rd</h1>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </BRow>
    </BCol>

    <BCol class="d-flex justify-content-center col">
      <BRow class="bg3">
        <h1>4th</h1>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </BRow>
    </BCol>

    <BCol
      id="höjd"
      class="d-flex justify-content-center col align-items-stretch"
    >
      <BRow class="bg4">
        <h1>5th</h1>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </BRow>
    </BCol>
  </BContainer>
</template>
