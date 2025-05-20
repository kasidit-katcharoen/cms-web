export interface User {
  id: number;
  name: string;
  email: string;
}

// export const user = ref<User | null>(null);

export function useUser() {
  const router = useRouter();

  const user = useState<User | null>("user", () => null);

  function setUser(newUser: User | null) {
    user.value = newUser;
  }

  async function login(data: { email: string; password: string }) {
    try {
      await $fetch("/api/auth/login", {
        method: "POST",
        body: data,
      });
      await getCurrentUser();
      router.push("/");
      alert("Login success!");
    } catch (error) {
      alert("Login failed! ");
    }
  }

  async function logout() {
    try {
      await $fetch("/api/auth/logout", {
        method: "POST",
      });
      setUser(null);
      alert("Logout success!");
      router.push("/");
    } catch (error) {
      alert("Logout failed! ");
    }
  }

  async function getCurrentUser() {
    const fetch = useRequestFetch();
    try {
      const { data } = await fetch("/api/auth/me");
      setUser(data);
    } catch (error) {
      setUser(null);
    }
  }

  return {
    user,
    setUser,
    login,
    logout,
    getCurrentUser,
  };
}
