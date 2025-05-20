<script setup lang="ts">
useSeoMeta({
  title: "Admin Panel",
});
</script>
<template>
  <div>
    <nav>
      <h1>Admin Panel</h1>
    </nav>
    <main>
      <slot></slot>
    </main>
  </div>
</template>
