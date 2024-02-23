import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    filterContact: (state, action) => {
      state.filters.name = action.payload;
    },
  },
});

export const { filterContact } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
