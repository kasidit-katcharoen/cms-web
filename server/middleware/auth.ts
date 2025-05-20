export default defineEventHandler((event) => {
  event.context.auth = {};
  event.context.auth.id = 111;
  event.context.auth.user = '222';
});
