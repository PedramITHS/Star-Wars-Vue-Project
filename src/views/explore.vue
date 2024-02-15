<script></script>

<style>
.bg1 {
  background-image: linear-gradient(to left, transparent, white 90%),
    url("../assets/darth1.png");
  background-size: cover;
}

.bg2 {
  background-image: linear-gradient(to right, transparent, white 90%),
    url("../assets/luke1.png");
  background-size: cover;
}

.bg3 {
  background-image: linear-gradient(to left, transparent, white 90%),
    url("../assets/han1.png");
  background-size: cover;
}
.bg4 {
  background-image: linear-gradient(to right, transparent, white 90%),
    linear-gradient(to right, red, blue);
  background-size: cover;
}
</style>

<template>
  <BContainer>
    <BRow class="bg1" cols="2">
      <BCol>
        <h1>1st</h1>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </BCol>
    </BRow>
    <BRow class="bg2" cols="2" align-h="end">
      <BCol>
        <h1>2nd</h1>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </BCol>
    </BRow>
    <BRow class="bg3" cols="2">
      <BCol>
        <h1>3rd</h1>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </BCol>
    </BRow>
    <BRow class="bg4" cols="2" align-h="end">
      <BCol>
        <h1>4th</h1>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </BCol>
    </BRow>
  </BContainer>
</template>
