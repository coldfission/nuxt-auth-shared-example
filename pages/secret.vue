<template>
  <div>
    <h1>Super Secret Page</h1>
    <p>Secret Message: {{ message }}</p>
    <NuxtLink to="/">Back to the home page</NuxtLink>
  </div>
</template>

<script>
export default {
  middleware: ['auth'],
  auth: 'local',
  data () {
    return {
      message: null,
    }
  },
  async fetch () {
    try {
      const result = await this.$axios.$get('/api/secretData')
      this.message = result.message
    } catch (e) {
      this.message = "Error: " + e.message
    }
  }
};
</script>
