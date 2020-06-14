<template>
  <div>
    <div v-if="$auth.loggedIn">
      Logged In. <button @click="$auth.logout()">Logout</button>
    </div>
    <div v-else>
      Logged Out. <NuxtLink to="/login">Login</NuxtLink>
    </div>
    <p>
      <NuxtLink to="/secret">Super secret page</NuxtLink>
    </p>
  </div>
</template>
