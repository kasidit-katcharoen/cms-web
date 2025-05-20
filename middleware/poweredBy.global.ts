export default defineNuxtRouteMiddleware((to, from) => {
  if (import.meta.server) {
    const header = useResponseHeader("X-My-Always-Header");
    header.value = `Nuxt 3 kasidit`;
  }
});
