<script setup lang="ts">
const { user, logout } = useUser();

const config = useRuntimeConfig();
const currentYear = new Date().getFullYear();

interface NavItem {
  title: string;
  to: string;
  isExternal?: boolean;
}

const navItems: NavItem[] = [
  { title: "Home", to: "/" },
  { title: "About", to: "/about" },
  { title: "Products", to: "/products" },
  { title: "Admin", to: "/about" },
  { title: "google", to: config?.public?.baseUrl, isExternal: true },
];

</script>
<template>
  <div>
    <nav>
      <ul>
        <li v-for="item in navItems" :key="item.title">
          <NuxtLink v-if="!item.isExternal" :to="item.to || '#'">{{
            item.title || ""
          }}</NuxtLink>
          <a
            v-else
            :href="item.to || '#'"
            target="_blank"
            rel="noopener noreferrer"
            >{{ item.title || "" }}</a
          >
        </li>
        <template v-if="!user">
          <li><NuxtLink to="/sign-up">Sign Up</NuxtLink></li>
          <li><NuxtLink to="/login">Login</NuxtLink></li>
        </template>
        <li v-else><button @click="logout">Logout</button></li>
      </ul>
    </nav>
    <main>
      <slot></slot>
    </main>
    <footer>
      <p>&copy; {{ currentYear }} by Kasidit Katcharoen</p>
    </footer>
  </div>
</template>
