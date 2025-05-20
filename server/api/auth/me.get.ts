import { jwtVerify } from "jose";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const token = getCookie(event, "token");
  console.log('token',token);
  
  if (!token) {
    throw createError({
      statusCode: 401,
      statusMessage: "Unauthorized",
    });
  }

  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(config.jwtSecret),
      { algorithms: ["HS256"] }
    );
    const user = users.find((u) => u.id === payload.userId);

    if (!user) {
      throw createError({
        message: "Unauthorized",
        statusCode: 401,
      });
    }
    return {data: {id: user.id, name: user.name, email: user.email}}
  } catch (error) {
    
    throw createError({
      message: "Unauthorized",
      statusCode: 401,
    });
  }
});
