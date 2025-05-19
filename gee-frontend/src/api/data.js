// api/index.js
import axios from 'axios';

export const getProducts = async () => {
  try {
    const response = await axios.get('http://localhost:5050/api/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};
