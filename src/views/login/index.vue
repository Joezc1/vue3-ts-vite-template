<template>
  <div class="home">
    <h2 class="title">login</h2>
    <div>vuex:{{ count }}</div>
    <button @click="addCount">累加</button>
    <div>
      <router-link to="/">首页</router-link>
    </div>
  </div>
</template>


<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "@/store/index";
const store = useStore();
const count = computed(() => {
  return store.state.user.counter;
});
function addCount(): void {
  store.commit("increment", count.value + 1);
}
</script>

<style lang="scss" scoped>
.home {
  .title {
      color: $test-color;
  }
}
</style>
