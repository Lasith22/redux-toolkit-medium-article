import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: {
      name: 'Lasith Herath',
      age: 23,
      email: 'lasithherarh00@gmail.com',
    },
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { login } = userSlice.actions;
export default userSlice.reducer;
