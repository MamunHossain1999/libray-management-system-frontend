import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: { id: string; name: string; email: string } | null;
  loading: boolean;
}

const initialState: UserState = {
  user: null,
  loading: true, // ✅ initial loading true
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<{ id: string; name: string; email: string }>) {
      state.user = action.payload;
      state.loading = false;
    },
    clearUser(state) {
      state.user = null;
      state.loading = false; 
    },
    setLoadingDone(state) {
      state.loading = false; 
    },
  },
});

export const { setUser, clearUser, setLoadingDone } = authSlice.actions;
export default authSlice.reducer;
