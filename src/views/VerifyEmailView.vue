<script setup>
import { useRouter } from "vue-router"
import { onMounted } from "vue"
import { useToastToggleStore } from "../stores/toastToggle"
import httpClient from "../axios"

const router = useRouter()
const toastToggle = useToastToggleStore()
const props = defineProps(["query"])
onMounted(async () => {
  httpClient
    .post("/auth/verification", {
      token: props.query
    })
    .then((result) => {
      if (result.status == 200) {
        toastToggle.setToast("success", "Email verfied successfully!")
        toastToggle.toggleToast()
        router.push({ name: "auth.login" })
      }
    })
    .catch((error) => {
      console.log(error)
      toastToggle.setToast("error", "Verify email failed!")
      toastToggle.toggleToast()
      router.push({ name: "auth.login" })
    })
})
</script>
<template>
  <div class=""></div>
</template>
