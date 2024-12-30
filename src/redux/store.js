import { configureStore, createSlice } from "@reduxjs/toolkit";

// Local Storage Helper Functions
const saveTokenToLocalStorage = (token) => {
  localStorage.setItem("token", token);
};

const removeTokenFromLocalStorage = () => {
  localStorage.removeItem("token");
};

const getTokenFromLocalStorage = () => {
  return localStorage.getItem("token");
};

// Auth Slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: getTokenFromLocalStorage(), // Başlangıçta token varsa localStorage'dan çek
    user: null,
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      saveTokenToLocalStorage(action.payload); // Token'ı localStorage'a kaydet
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    logout(state) {
      state.token = null;
      state.user = null;
      removeTokenFromLocalStorage(); // Token'ı localStorage'dan sil
    },
  },
});

export const { setToken, setUser, logout } = authSlice.actions;

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});
