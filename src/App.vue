<script setup>
const compony = [
  {
    name: "ok币所",
  },
  {
    name: "商汤科技",
  },
  {
    name: "百度科技",
  },
  {
    name: "百度科技12",
  },
];
</script>

<template>
  <div>
    <div v-for="item in compony">
      {{ item.name }}
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
