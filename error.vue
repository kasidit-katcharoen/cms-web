<script setup lang="ts">
const error = useError();
</script>

<template>
  <div>
    <h1>Page Error 404</h1>
    <p>Status: {{ error?.statusCode }}</p>
    <p>Message: {{ error?.message }}</p>
    <!-- <pre>{{ error }}</pre> -->
  </div>
</template>

<style lang="scss" scoped></style>
