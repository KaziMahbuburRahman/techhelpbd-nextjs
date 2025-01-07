export async function fetchNews(category: string = "", search: string = "") {
  const data = await fetch(
    `https://news-api-next-js-kappa.vercel.app/api/news?category=${category}&search=${search}`
  ).then((res) => res.json());
  return data;
}
