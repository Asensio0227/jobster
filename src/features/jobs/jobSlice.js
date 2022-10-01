import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getUserFromLocalStorage } from '../../utils/LocalStorage';
import { createJobThunk, deleteJobThunk, editJobThunk } from './jobThunk';

const initialState = {
  isLoading: false,
  position: '',
  company: '',
  jobLocation: '',
  jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
  jobType: 'full-time',
  statusOptions: ['interview', 'declined', 'pending'],
  status: 'pending',
  isEditing: false,
  editJobId: '',
};

export const createJob = createAsyncThunk('job/createJob', createJobThunk);

export const deleteJobs = createAsyncThunk('job/deleteJobs', deleteJobThunk);

export const editJobs = createAsyncThunk('job/editJobs',editJobThunk);

const JobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    clearValues: () => {
      return {
        ...initialState,
        jobLocation: getUserFromLocalStorage()?.location || ''
      }
    },
    setEditJob: (state,{ payload}) => {
      return { ...state, isEditing: true, ...payload }
    }
  },
  extraReducers: {
    [createJob.pending]: (state) => {
      state.isLoading = true;
    },
    [createJob.fulfilled]: (state) => {
      state.isLoading = false;
      toast.success('Job created...');
    },
    [createJob.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [deleteJobs.fulfilled]: (state) => {
      state.isLoading = false;
      toast.success()
    },
    [deleteJobs.rejected]: (state,{payload}) => {
      state.isLoading = false;
      toast.success(payload);
    },
    [editJobs.pending]: (state) => {
      state.isLoading = true;
    },
    [editJobs.fulfilled]: (state,) => {
      state.isLoading = false;
      toast.success('Job modified...');
    },
    [editJobs.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export const { handleChange,clearValues,setEditJob } = JobSlice.actions;
export default JobSlice.reducer;