<template>
  <div>
    <h1>Test Music Player</h1>
    <!-- Ljudspelaren -->
    <audio ref="audioPlayer" autoplay controls>
      <source :src="songSrc" type="audio/mpeg" />
      Din webbläsare stöder inte ljudfilen.
    </audio>
  </div>
</template>

<script>
// Importera ljudfilen
import songSrc from "/assets/star.mp3";

export default {
  data() {
    return {
      // Sökvägen till din låt
      songSrc: songSrc,
    };
  },
};
</script>

<style scoped>
/* Lägg till eventuell CSS-styling här */
</style>
