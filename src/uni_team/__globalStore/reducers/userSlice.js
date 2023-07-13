import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  user: []
};

const userSlice = createSlice({
  name: 'Login User Response',
  initialState,
  reducers: {
    updateLoginUser: (state, action) => {
      state.user = action.payload;
    }
  }
});

export const { updateLoginUser } = userSlice.actions;
export default userSlice.reducer;
