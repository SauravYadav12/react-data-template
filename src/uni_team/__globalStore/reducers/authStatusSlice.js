import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  auth: true
};

const authStatusSlice = createSlice({
  name: 'Auth Status',
  initialState,
  reducers: {
    loginUser: (state) => {
      state.auth = true;
    },
    logoutUser: (state) => {
      state.auth = false;
    }
  }
});

export const { loginUser, logoutUser } = authStatusSlice.actions;
export default authStatusSlice.reducer;
