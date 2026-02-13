// Simple API helper for SmileSchool endpoints.
// Works with the Holberton public API (JSON).

export const API_BASE_URL =
  import.meta?.env?.VITE_SMILESCHOOL_API_URL || "https://smileschool-api.hbtn.info";

export async function fetchJSON(path, { signal } = {}) {
  const url = path.startsWith("http") ? path : `${API_BASE_URL}${path}`;
  const res = await fetch(url, {
    method: "GET",
    headers: { Accept: "application/json" },
    signal,
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Request failed (${res.status}): ${text || res.statusText}`);
  }

  return res.json();
}

// Endpoints used across the app
export const endpoints = {
  quotes: "/quotes",
  popularTutorials: "/popular-tutorials",
  latestVideos: "/latest-videos",
  courses: "/courses",
};
