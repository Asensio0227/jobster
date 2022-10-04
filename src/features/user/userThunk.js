import customFetch, { checkForUnauthorizedResponse }  from '../../utils/CustomFetch';
import { logoutUser } from './userSlice';
import { clearValues } from '../jobs/jobSlice';
import { clearAllJobsState } from '../allJobs/allJobsSlice';


export const registerUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, user);

    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  };
};

export const loginUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, user);

    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  };
};

export const updateUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.patch(url, user);
    return resp.data
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
}

export const clearAllJobsStoreThunk = (msg, thunkAPI) => {
  try {
    // logout user
    thunkAPI.dispatch(logoutUser(msg));
    // clear jobs values
    thunkAPI.dispatch(clearAllJobsState());
    // clear all input values
    thunkAPI.dispatch(clearValues());
    return Promise.resolve(); 
  } catch (error) {
    return Promise.rejected(msg);
  }
}