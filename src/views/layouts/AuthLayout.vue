<script setup>
import { RouterView } from "vue-router"
</script>
<template>
    <div class="w-screen h-screen flex justify-center items-center bg-[#d2d0dd]">
        <div class="w-2/3 h-3/4 flex">
            <div class="bg-white flex-1 rounded-l-lg flex flex-col justify-center items-center">
                <div class="flex w-2/3 flex-col">
                    <RouterView />
                </div>
            </div>
            <div class="bg-[#f3f4f8] flex-1 rounded-r-lg flex justify-center items-center">
                <div class="w-[200px] h-[200px] flex flex-col">
                    <div class="w-full h-1/2 rounded-t-full bg-[#f46801]"></div>
                    <div class="h-1/2 w-full blur-xl bg-[#f46801] rounded-b-full"></div>
                </div>
            </div>
        </div>
    </div>
</template>