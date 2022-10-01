import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Form, FormRowSelect } from '../../components';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import {
  handleChange,
  clearValues,
  createJob,
  editJobs
} from '../../features/jobs/jobSlice';

const AddJobs = () => {
  const dispatch = useDispatch();
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);
  const {user} =useSelector((store) => store.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!position || !company || !jobType) {
      toast.error('Please fill out all fields');
      return;
    }
    if (isEditing) {
      dispatch(
        editJobs({
          jobId: editJobId,
          job: {
            position,
            company,
            jobLocation,
            jobType,
            status,
          }
        })
        );
        return
      }
      dispatch(createJob({ position, company, jobLocation, jobType, status }));
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  useEffect(() => {
    if (!isEditing) {
      dispatch(handleChange({ name: 'jobLocation', value: user.location }));
    }
  }, []);

  
  
  return (
    <Wrapper>
      <form className='form'>
        <h3>{isEditing ? 'Edit Job' : 'Add Job'}</h3>
        <div className="form-center">
          {/* position */}
           <Form
            type='text'
            name='position'
            value={position}
            handleChange={handleJobInput}
          />
          {/* company */}
          <Form
            type='text'
            name='company'
            value={company}
            handleChange={handleJobInput}
          />
          {/* location */}
          <Form
            type='text'
            labelText='job location'
            name='jobLocation'
            value={jobLocation}
            handleChange={handleJobInput}
          />
          {/* status */}
         <FormRowSelect
            type='text'
            name='status'
            value={status}
            handleChange={handleJobInput}
            list={statusOptions}
          />
          {/* jobType */}
          <FormRowSelect
            type='text'
            labelText='Job Type'
            name='jobType'
            value={jobType}
            handleChange={handleJobInput}
            list={jobTypeOptions}
          />

          {/* btn container */}
          <div className="btn-container">
            <button
              type='button'
              className="btn btn-block clear-btn"
              onClick={() =>dispatch(clearValues())}
            >
              clear
            </button>
            <button
              type='submit'
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
}

export default AddJobs