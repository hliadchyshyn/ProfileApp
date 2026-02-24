import { configureStore, createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface UiState {
  activeSection: string;
}

const uiSlice = createSlice({
  name: 'ui',
  initialState: { activeSection: 'hero' } as UiState,
  reducers: {
    setActiveSection(state, action: PayloadAction<string>) {
      state.activeSection = action.payload;
    },
  },
});

export const { setActiveSection } = uiSlice.actions;

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
