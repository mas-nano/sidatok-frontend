<script setup>
import { RouterLink, useRouter } from "vue-router"
import { ref, onMounted } from "vue"
import { toast } from "vue3-toastify"
import { useToastToggleStore } from "../stores/toastToggle"

const router = useRouter()
const email = ref("")
const password = ref("")
const isLoading = ref(false)
const toastToggle = useToastToggleStore()

onMounted(() => {
  if (toastToggle.toggle) {
    switch (toastToggle.typeToast) {
      case "success":
        toast.success(toastToggle.messageToast)
        break
      case "error":
        toast.error(toastToggle.messageToast)
        break

      default:
        break
    }
    toastToggle.toggleToast()
  }
})

function login() {}

function loginGoogle() {}
</script>
<template>
  <form action="" @submit.prevent="login" class="flex flex-col">
    <h1 class="text-4xl">Welcome Back</h1>
    <p class="text-sm my-3">Welcome Back! Please enter your details.</p>
    <div class="my-1">
      <label for="" class="w-full">Email</label>
      <input
        type="text"
        name=""
        v-model="email"
        class="w-full py-2 px-3 border-2 border-gray-300 shadow-sm rounded-lg focus:border-[#f46801] focus:outline-none focus:ring focus:ring-orange-600 focus:ring-opacity-50"
      />
    </div>
    <div class="my-1">
      <label for="" class="w-full">Password</label>
      <input
        type="password"
        name=""
        v-model="password"
        class="w-full py-2 px-3 border-2 border-gray-300 shadow-sm rounded-lg focus:border-[#f46801] focus:outline-none focus:ring focus:ring-orange-600 focus:ring-opacity-50"
      />
    </div>
    <div class="flex justify-between items-center">
      <div class="">
        <input type="checkbox" name="" id="check" class="rounded shadow-sm" />
        <label for="check" class="ml-2 text-sm">Remember for 30 days</label>
      </div>
      <p class="text-sm">Forgot Password</p>
    </div>
    <button
      class="my-2 px-3 py-2 bg-[#f46801] rounded-lg text-white"
      :disabled="isLoading"
      :class="isLoading ? 'bg-[#f57c22] cursor-not-allowed' : ''"
      type="submit"
    >
      <font-awesome-icon :icon="['fas', 'spinner']" v-if="isLoading" class="animate-spin" /> Sign in
    </button>
    <button class="my-2 px-3 py-2 rounded-lg border-2" @click="loginGoogle" type="button">
      <font-awesome-icon :icon="['fab', 'google']" /> Sign in with Google
    </button>
    <RouterLink :to="{ name: 'auth.register' }" class="text-center text-sm my-2"
      >Don't have an account? Sign Up
    </RouterLink>
  </form>
</template>
