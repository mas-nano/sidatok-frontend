import { ref } from "vue"
import { defineStore } from "pinia"

export const useToastToggleStore = defineStore("toastToggle", () => {
  const toggle = ref(false)
  const messageToast = ref("")
  const typeToast = ref("")
  function toggleToast() {
    toggle.value = !toggle.value
  }
  function setToast(type, messages) {
    messageToast.value = messages
    typeToast.value = type
  }

  return { toggle, toggleToast, setToast, messageToast, typeToast }
})
