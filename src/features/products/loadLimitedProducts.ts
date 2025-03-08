
import { createAsyncThunk } from "@reduxjs/toolkit";


export const loadLimitedProducts = createAsyncThunk(
    'productsLimit/loadLimitedProducts',
    async (limit: number) => {
      const response = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
      return await response.json();
    }
  );
