import axios from "axios";
import env from "../constants/env";

export const getProducts = async () => {
  try {
    const response = await axios(`${env.API_URL}/products`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = async (id) => {
  const response = await axios(`${env.API_URL}/products/${id}`);
  return response.data.data;
};

export const postSignIn = async ({ email, password }) => {
  try {
    const response = await axios.post(`${env.API_URL}/users/signin`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.log(error.response.data.message);
  }
};

export const postSignUp = async ({
  name,
  email,
  password,
  confirmPassword,
}) => {
  try {
    const response = await axios.post(`${env.API_URL}/users/signup`, {
      name,
      email,
      password,
      confirmPassword,
    });
    return response.data.data;
  } catch (error) {
    if (error.response.data.error.code === 11000) {
      console.log("Email đã tồn tại");
    } else {
      console.log(error);
    }
  }
};

export const patchUpdateMe = async ({ name, email }) => {
  try {
    const response = await axios.patch(`${env.API_URL}/users/update-me`, {
      name,
      email,
    });

    return response.data.data;
  } catch (error) {
    console.log(error.response);
  }
};

export const getItemsInCart = async ({ token }) => {
  try {
    const response = await axios.get(`${env.API_URL}/cart/items`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const postItemInCart = async ({
  token,
  productId,
  quantity,
  option,
}) => {
  try {
    const response = await axios.post(
      `${env.API_URL}/cart/items`,
      {
        product: productId,
        quantity,
        option,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    return response.data;
  } catch (error) {
    console.log(error.response);
  }
};

export const deleteItemInCart = async ({ id, token }) => {
  try {
    const response = await axios.delete(`${env.API_URL}/cart/items/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  } catch (error) {
    console.log(error.response);
  }
};

export const patchItemInCart = async ({ id, quantity, token }) => {
  try {
    const response = await axios.patch(
      `${env.API_URL}/cart/items/${id}`,
      { quantity },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error.response);
  }
};

export const postOrder = async ({ address, phone, token }) => {
  try {
    const response = await axios.post(
      `${env.API_URL}/orders`,
      {
        address,
        phone,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    return response.data;
  } catch (error) {
    console.log(error.response);
  }
};

export const getOrders = async ({ token }) => {
  try {
    const response = await axios.get(`${env.API_URL}/orders`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  } catch (error) {
    console.log(error.response);
  }
};

export const patchUpdateMyPassword = async ({
  token,
  currentPassword,
  password,
  confirmPassword,
}) => {
  try {
    const response = await axios.patch(
      `${env.API_URL}/users/update-my-password`,
      {
        currentPassword,
        password,
        confirmPassword,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error.response);
  }
};

export const getOrder = async ({ id, token }) => {
  try {
    const response = await axios.get(`${env.API_URL}/orders/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  } catch (error) {
    console.log(error.response);
  }
};

export const postForgotPassword = async({email})=>{
  try {
    const response = await axios.post(`${env.API_URL}/users/forgot-password`, {
      email,
    });
    return response.data;
  } catch (error) {
    console.log(error.response.data.message);
  }
}