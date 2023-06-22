import { ref } from "vue"
import { defineStore } from "pinia"

export const useUserStore = defineStore("user", () => {
  const user = ref({})
  function storeUser(userLoggedIn) {
    user.value = userLoggedIn
  }
  function removeUser() {
    user.value = {}
  }

  return { user, storeUser, removeUser }
})
