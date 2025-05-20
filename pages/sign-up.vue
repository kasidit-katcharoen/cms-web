<script setup lang="ts">
const router = useRouter();

const input = ref({
  name: "",
  email: "",
  password: "",
});

async function onSignUp() {
  try {
    await $fetch('/api/auth/sign-up', {
        method: 'POST',
        body: JSON.stringify(input.value),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    alert('Sign Up Successful!');
    router.push('/login');
  } catch (error) {
    alert('Sign Up Failed!');
  }
}

</script>

<template>
  <div>
    <h1>Sign Up</h1>
    <form @submit.prevent="onSignUp">
      <input type="text" v-model="input.name" placeholder="name" />
      <input type="email" v-model="input.email" placeholder="email" />
      <input type="password" v-model="input.password" placeholder="Password" />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
