import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userData: {},
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    sinupWithPhone: (state, action) => {
      console.log(action.payload, 'in reducer');
      state.userData = action.payload;
    },
    signpWithEmail: (state, action) => {
      console.log(action.payload, "reducer");
      state.userData = action.payload;
    },
  },
});

export const {signpWithEmail, sinupWithPhone} = authSlice.actions;

export default authSlice.reducer;
