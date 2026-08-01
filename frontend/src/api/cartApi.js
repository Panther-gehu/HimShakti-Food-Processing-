import axios from "axios";

const BASE_URL = "https://himshakti-food-processing.onrender.com/api/cart";

// Add to Cart
export const addToCart = async (user_id, product_id, quantity) => {
    const response = await axios.post(BASE_URL, {
        user_id,
        product_id,
        quantity
    });

    return response.data;
};

// Get Cart Items
export const getCart = async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
};

// Update Quantity
export const updateCart = async (id, user_id, product_id, quantity) => {
    const response = await axios.put(`${BASE_URL}/${id}`, {
        user_id,
        product_id,
        quantity
    });

    return response.data;
};

// Delete Cart Item
export const deleteCartItem = async (id) => {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data;
};

// Checkout
export const checkoutCart = async (userId) => {
    const response = await axios.post(
        `${BASE_URL}/checkout/${userId}`
    );

    return response.data;
};
