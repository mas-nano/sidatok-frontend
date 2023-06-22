<script setup>
import { RouterLink, useRouter } from "vue-router"
import { ref } from "vue"
import httpClient from "../axios"
import { useLoadingStore } from "../stores/loading"
import { toast } from "vue3-toastify"

const router = useRouter()
const email = ref("")
const name = ref("")
const password = ref("")
const passwordConfirmation = ref("")
const loadingStore = useLoadingStore()

function regsiter() {
  httpClient
    .post("/auth/register", {
      email: email.value,
      name: name.value,
      password: password.value,
      passwordConfirmation: passwordConfirmation.value
    })
    .then((result) => {
      if (result.status == 200) {
        toast.success("We sent verification email to your email. Please verify your email")
        router.push({ name: "auth.login" })
      }
    })
    .catch((error) => {
      toast.error("An error has occured: " + error.response.data.msg)
      console.log(error)
    })
}
function loginGoogle() {}
</script>
<template>
  <form action="post" @submit.prevent="regsiter" class="flex flex-col">
    <h1 class="text-4xl">Welcome</h1>
    <p class="text-sm my-3">Welcome to SIDATOK! Please provide your details.</p>
    <div class="my-1">
      <label for="" class="w-full">Name</label>
      <input
        type="text"
        name="name"
        v-model="name"
        class="w-full py-2 px-3 border-2 border-gray-300 shadow-sm rounded-lg focus:border-[#f46801] focus:outline-none focus:ring focus:ring-orange-600 focus:ring-opacity-50"
      />
    </div>
    <div class="my-1">
      <label for="" class="w-full">Email</label>
      <input
        type="text"
        name="email"
        v-model="email"
        class="w-full py-2 px-3 border-2 border-gray-300 shadow-sm rounded-lg focus:border-[#f46801] focus:outline-none focus:ring focus:ring-orange-600 focus:ring-opacity-50"
      />
    </div>
    <div class="my-1">
      <label for="" class="w-full">Password</label>
      <input
        type="password"
        name="password"
        v-model="password"
        class="w-full py-2 px-3 border-2 border-gray-300 shadow-sm rounded-lg focus:border-[#f46801] focus:outline-none focus:ring focus:ring-orange-600 focus:ring-opacity-50"
      />
    </div>
    <div class="my-1">
      <label for="" class="w-full">Password Confirmation</label>
      <input
        type="password"
        name="password"
        v-model="passwordConfirmation"
        class="w-full py-2 px-3 border-2 border-gray-300 shadow-sm rounded-lg focus:border-[#f46801] focus:outline-none focus:ring focus:ring-orange-600 focus:ring-opacity-50"
      />
    </div>
    <button class="my-2 px-3 py-2 bg-[#f46801] rounded-lg text-white">
      <font-awesome-icon
        :icon="['fas', 'spinner']"
        v-if="loadingStore.loading"
        class="animate-spin"
      />Sign up
    </button>
    <button class="my-2 px-3 py-2 rounded-lg border-2" @click="loginGoogle">
      <font-awesome-icon :icon="['fab', 'google']" /> Sign up with Google
    </button>
    <RouterLink :to="{ name: 'auth.login' }" class="text-center text-sm my-2"
      >Have an account? Sign In</RouterLink
    >
  </form>
</template>
