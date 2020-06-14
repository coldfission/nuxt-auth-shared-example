<template>
  <div>
    <h1>Super secret page</h1>
    <NuxtLink to="/">Back to the home page</NuxtLink>
  </div>
</template>

<script>
export default {
  middleware: ['auth'],
  auth: 'local'
};
</script>
