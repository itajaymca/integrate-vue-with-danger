<template>
  <div>
    <button
      v-show="loggedIn"
      class="btn"
    >
      Logout
    </button>
  </div>
</template>
  
  <script lang="ts">
  export default {
    name: 'AppHeader',
    data() {
      return {
        loggedIn: false
      }
    }
  }
  </script>