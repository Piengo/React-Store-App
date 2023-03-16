const baseUrl = "https://dummyjson.com/products";

export const getAllTops = () => {
  return fetch(`${baseUrl}/category/tops?limit=30`).then((res) => res.json());
};

export const getTopById = (id) => {
  fetch(`${baseUrl}/${id}`)
    .then((res) => res.json())
    .then(console.log);
};
