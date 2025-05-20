<script setup lang="ts">
import { NuxtLink } from "#components";

if (import.meta.server) {
}

// const { data, status } = useAsyncData<{ products: Product[] }>(async () => {
//   const data = await $fetch<{ products: Product[] }>(
//     "https://dummyjson.com/products?select=id,title,price"
//   );
//   return data;
// });

const { data, status } = useFetch<ProductResponse>(
  "https://dummyjson.com/products?select=id,title,price"
);
console.log("data", data?.value);
</script>
<template>
  <div>
    <ul>
      <p>{{ status }}</p>
      <li v-for="product in data?.products" :key="product.id">
        <NuxtLink :to="`/products/${product.id}`">
          {{ product.title }} - ({{ product.price }})
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped></style>
