import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api/",
});

// Helper to handle errors
const handleError = (error) => {
  console.error("API Error:", error.response?.data || error.message);
  throw error;
};

// Auth
export const UserSignUp = async (data) => {
  try {
    const res = await API.post("/user/signup", data);
    return res.data;
  } catch (error) {
    handleError(error);
  }
};

export const UserSignIn = async (data) => {
  try {
    const res = await API.post("/user/signin", data);
    return res.data;
  } catch (error) {
    handleError(error);
  }
};

// Products
export const getAllProducts = async (filter) => {
  try {
    const res = await API.get(`/products?${filter}`);
    return res.data;
  } catch (error) {
    handleError(error);
  }
};

export const getProductDetails = async (id) => {
  try {
    const res = await API.get(`/products/${id}`);
    return res.data;
  } catch (error) {
    handleError(error);
  }
};

// Cart
export const getCart = async (token) => {
  try {
    const res = await API.get("/user/cart", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    handleError(error);
  }
};

export const addToCart = async (token, data) => {
  try {
    const res = await API.post("/user/cart/", data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    handleError(error);
  }
};

export const deleteFromCart = async (token, data) => {
  try {
    const res = await API.patch("/user/cart/", data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    handleError(error);
  }
};

// Favourites
export const getFavourite = async (token) => {
  try {
    const res = await API.get("/user/favorite", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    handleError(error);
  }
};

export const addToFavourite = async (token, data) => {
  try {
    const res = await API.post("/user/favorite/", data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    handleError(error);
  }
};

export const deleteFromFavourite = async (token, data) => {
  try {
    const res = await API.patch("/user/favorite/", data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    handleError(error);
  }
};

// Orders
export const placeOrder = async (token, data) => {
  try {
    const res = await API.post("/user/order/", data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    handleError(error);
  }
};

export const getOrders = async (token) => {
  try {
    const res = await API.get("/user/order/", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    handleError(error);
  }
};
