<template>
  <div>

  </div>
</template>

<script>
  export default {
    created: function() {
      this.$store.dispatch('todos/init')
    }
  }
</script>