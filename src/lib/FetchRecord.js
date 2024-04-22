// src/services/productService.js
import axios from 'axios';

const BASE_URL = 'https://store-api.cogeter.com/api/products';

export const getProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}?limit=30`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
