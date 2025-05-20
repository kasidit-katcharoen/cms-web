<script setup lang="ts">
const { user, login } = useUser();
if (user.value) {
  await navigateTo("/");
}
const router = useRouter();

const input = ref({
  email: "",
  password: "",
});

async function onLogin() {
  await login(input.value);
  router.push("/");
}
</script>

<template>
  <div>
    login
    <form @submit.prevent="onLogin">
      <input type="email" v-model="input.email" placeholder="email" />
      <input type="password" v-model="input.password" placeholder="Password" />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<style scoped lang="scss"></style>
