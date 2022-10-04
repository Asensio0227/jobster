import { Form, FormRowSelect } from '.';
import Wrapper from '../assets/wrappers/SearchContainer';
import { useSelector, useDispatch } from 'react-redux';
import { clearFilters, handleChange } from '../features/allJobs/allJobsSlice';


const SearchContainer = () => {
  const { isLoading, search, searchStatus, searchType,sort, sortOptions } = useSelector((store) => store.allJobs);
  const { jobTypeOptions, statusOptions } = useSelector((store) => store.job);
  const dispatch = useDispatch();

  const handleSearch = (e) => { 
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({name,value}))
  }
  
  const handleSubmit = (e) => {
    if (isLoading) return;
    dispatch(clearFilters());
  }

  return (
    <Wrapper>
      <form className='form'>
        <h2>search form</h2>
        <div className='form-center'>
          {/* search position */}
          <Form
            type='text'
            name='search'
            value={search}
            handleChange={handleSearch}
          />
          {/* status position*/}
          <FormRowSelect
            type='text'
            labelText='Status'
            name='searchStatus'
            value={searchStatus}
            handleChange={handleSearch}
            list={['all', ...statusOptions]}
          />
          {/* jobTypeOptions position */}
          <FormRowSelect
            type='text'
            labelText='Job Type'
            name='searchType'
            value={searchType}
            handleChange={handleSearch}
            list={['all',...jobTypeOptions]}
          />
          {/* sort position */}
          <FormRowSelect
            type='sort'
            name='sort'
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          />
          <button
            type='button'
            disabled={isLoading}
            className="btn btn-block btn-danger"
            onClick={handleSubmit}
          >
            clear filters
            </button>
        </div>
      </form>
    </Wrapper>
  )
};

export default SearchContainer