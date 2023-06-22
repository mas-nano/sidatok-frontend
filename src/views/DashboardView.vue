<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()
const loggedIn = ref(false)

function logout() {}
</script>
<template>
  <button @click="logout" v-if="loggedIn">Logout</button>
</template>
