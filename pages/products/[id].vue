<script setup lang="ts">
const route = useRoute();
const id = route?.params?.id || null;

const {data, status} = useFetch<Product>(
  `https://dummyjson.com/products/${id}?select=id,title,price`
);

</script>

<template>
  <div>
    <div v-if="data">
        <!-- <p>Id: {{ data?.id || "" }}</p> -->
        <p>Title: {{ data?.title }}</p>
        <p>Price: {{ data?.price }}</p>
    </div>
    <div v-else>
        Loading...
    </div>
  </div>
</template>

<style lang="scss" scoped></style>