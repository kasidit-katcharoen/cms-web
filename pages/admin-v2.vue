<script setup lang="ts">
if (import.meta.dev) {
}
definePageMeta({
  layout: false,
  middleware: "only-admin",
});
</script>

<template>
  <div>
    <nav>Admin Panel (v2)</nav>
    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<style lang="scss" scoped></style>
