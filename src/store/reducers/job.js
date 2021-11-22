import { createSlice } from '@reduxjs/toolkit';

import { JOBS } from 'data';

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
      const jobs = Object.keys(JOBS);
      console.log(jobs);
      state.loading = false;
    },
  },
  extraReducers: {},
});

export const { setError, cleanState, getJobs } = jobSlice.actions;

export default jobSlice.reducer;
