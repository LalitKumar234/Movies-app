// simple wrapper with in-memory cache and abort support
const BASE = 'https://imdb.iamidiotareyoutoo.com/search';

const searchCache = new Map<string, any>();
const detailsCache = new Map<string, any>();

export async function searchMovies(query: string, { signal }: { signal?: AbortSignal } = {}) {
  const q = query.trim();
  if (!q) return [];
  if (searchCache.has(q)) return searchCache.get(q);

  const url = `${BASE}?q=${encodeURIComponent(q)}`;
  const res = await fetch(url, { signal });
  if (!res.ok) throw new Error(`Search failed: ${res.status}`);
  const json = await res.json();
  searchCache.set(q, json);
  return json;
}

export async function getMovieDetails(ttId: string, { signal }: { signal?: AbortSignal } = {}) {
  if (!ttId) return null;
  if (detailsCache.has(ttId)) return detailsCache.get(ttId);

  const url = `${BASE}?tt=${encodeURIComponent(ttId)}`;
  const res = await fetch(url, { signal });
  if (!res.ok) throw new Error(`Details failed: ${res.status}`);
  const json = await res.json();
  detailsCache.set(ttId, json);
  return json;
}