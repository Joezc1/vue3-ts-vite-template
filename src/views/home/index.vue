<template>
  <h2>home</h2>
  <div>vuex中的count:{{ count }}</div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useStore } from "@/store/index";
const store = useStore();
const count = computed(()=>{
    return store.state.user.counter
}) 

</script>

