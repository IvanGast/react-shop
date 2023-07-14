const API_PATH = `${process.env.REACT_APP_API_ROOT}`;
export async function getProducts() {
  let req = new Request(API_PATH, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const response = await fetch(req);
  return await response.json();
}
