import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  loginApi,
  signUpApi,
  logoutApi,
  currentApi,
} from '../../API/ApiAuth';

export const signUpThunk = createAsyncThunk(
  'auth/signup',
  async (body, { rejectWithValue }) => {
    try {
      return await signUpApi(body);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  });

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue }) => {
    try {
      return await loginApi(body);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  });

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await logoutApi();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const currentThunk = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue }) => {
    try {
      return await currentApi();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);