import api from "./axios";

// Get all products
export const getProducts = async () => {
  const response = await api.get("/products/");
  return response.data;
};

// Get single product by ID
export const getProductById = async (id) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

export const searchProducts = async (name) => {
  const response = await api.get(`/products/search?name=${name}`);
  return response.data;
};

export const addProduct = async (product) => {
  const response = await api.post("/products/", product);
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await api.delete(`/products/${id}`);
  return response.data;
};

export const updateProduct = async (id, product) => {
  const response = await api.put(`/products/${id}`, product);
  return response.data;
};
