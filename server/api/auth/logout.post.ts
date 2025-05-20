export default defineEventHandler(async (event) => {
  deleteCookie(event, "token");
  return { data: { success: true } };
});
