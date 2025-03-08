/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loadProducts = createAsyncThunk(
  'productsAction/loadProducts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const loadLimitedProducts = createAsyncThunk(
//     'productsLimit/loadLimitedProducts',
//     async (limit: number) => {
//       const response = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
//       return await response.json();
//     }
//   );


export const loadLimitedProducts = createAsyncThunk(
    'productsLimit/loadLimitedProducts',
    async (limit: number, thunkAPI) => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products?limit=${limit}`);
        return response.data;
      } catch (error: any) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );