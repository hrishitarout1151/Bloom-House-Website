const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

async function post(path, body) {
  const res = await fetch(`${API_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.message || "Something went wrong. Please try again.");
  }
  return res.json();
}

export const sendContactMessage = (payload) => post("/api/contact", payload);
export const sendPreorder = (payload) => post("/api/preorder", payload);
