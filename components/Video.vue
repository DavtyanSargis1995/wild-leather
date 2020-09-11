<template>
  <div class="player-container">
    <video width="100%" height="auto" autoplay muted>
      <source src="" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script>
  export default {
    methods: {
      visibilityChanged (isVisible, entry) {
      }
    }
  }
</script>
