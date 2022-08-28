import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { value: '' },
  reducers: {
    filterSet(state, action) {
      state.value = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { filterSet } = filterSlice.actions;

// Selector
export const getFilter = store => store.filter.value;
