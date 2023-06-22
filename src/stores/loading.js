import { ref } from "vue"
import { defineStore } from "pinia"

export const useLoadingStore = defineStore("loading", () => {
  const loading = ref(false)
  function toggleLoading() {
    loading.value = !loading.value
  }

  return { loading, toggleLoading }
})
