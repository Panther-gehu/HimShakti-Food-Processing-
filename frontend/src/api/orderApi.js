import api from "./axios";

// =======================================
// CREATE ORDER
// =======================================
export const createOrder = async (user_id, product_id, quantity) => {
  const response = await api.post("/orders/", {
    user_id,
    product_id,
    quantity,
  });

  return response.data;
};

// =======================================
// GET ALL ORDERS
// =======================================
export const getOrders = async () => {
  const response = await api.get("/orders/");
  return response.data;
};

// =======================================
// DELETE ORDER
// =======================================
export const deleteOrder = async (id) => {
  const response = await api.delete(`/orders/${id}`);
  return response.data;
};