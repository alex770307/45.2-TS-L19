/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginAction = createAsyncThunk(
  'authAction/loginAction',
  async (userData: { username: string; password: string; }, thunkAPI) => {
    try {
      const response = await axios.post('https://dummyjson.com/auth/login', userData);
      // мы сохраняем уникальный ключ-токен для нашего юзера
      // его можно использовать для авторизации в дальнейшем после обновления страницы
      localStorage.setItem('token', response.data.accessToken)
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// этот action вызовется если мы через проверку найдем в браузере токен
export const loginToken = createAsyncThunk(
  'authAction/loginToken',
  async (token: string, thunkAPI) => {
    try {
      const response = await axios.get('https://dummyjson.com/auth/me', {
        headers: {
          'Authorization': 'Bearer ' + token,
        },
      });
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);