export async function fetchUser() {
  try {
    const res = await fetch("/user", {
      method: "GET",
      credentials: "include",
    });

    if (!res.ok) return null;

    const data = await res.json();
    return data.user || null;
  } catch (err) {
    return null;
  }
}
