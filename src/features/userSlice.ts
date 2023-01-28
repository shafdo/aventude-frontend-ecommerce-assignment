import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: { value: { email: '', isLoggedin: false } },
  reducers: {
    saveUserData: (state, action) => {
      state.value = action.payload;
    },

    eraseUserData: (state) => {
      state.value = { email: '', isLoggedin: false };
    }
  }
});
