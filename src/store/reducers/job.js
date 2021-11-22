import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
  jobs: [],
  loading: false,
  error: null,
};

const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    setError(state, action) {
      state.error = action.payload;
    },
    cleanState(state) {
      state.error = null;
      state.loading = false;
    },
    getJobs(state) {
      state.loading = true;
        
      state.loading = false;
    },
  },
  extraReducers: {},
});

export const { setError, cleanState, getJobs } = jobSlice.actions;

export default jobSlice.reducer;
