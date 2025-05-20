<script setup lang="ts">
definePageMeta({
  layout: "admin",
});

const route = useRoute();
const router = useRouter();

if (Number(route?.params?.id) < 1) {
  await navigateTo("/admin/products");
}
</script>

<template>
  <div>
    <h1>Product ID: {{ route?.params?.id || "Null" }}</h1>
  </div>
</template>

<style lang="scss" scoped></style>
