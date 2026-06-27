import api from "./axios";

// Login API
export const loginUser = async (username, password) => {
  const response = await api.post("/auth/login", {
    username,
    password,
  });

  return response.data;
};

// Signup API
export const signupUser = async (username, password) => {
  const response = await api.post("/auth/signup", {
    username,
    password,
  });

  return response.data;
};