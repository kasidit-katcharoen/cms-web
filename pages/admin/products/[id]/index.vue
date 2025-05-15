<script setup lang="ts">
definePageMeta({
  layout: "admin",
});

const route = useRoute();
</script>

<template>
  <h1>Product ID: {{ route?.params?.id||'Null' }}</h1>
</template>

<style lang="scss" scoped></style>
