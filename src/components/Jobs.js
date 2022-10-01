import { useDispatch } from "react-redux";
import Wrapper from '../assets/wrappers/Job';
import { Link } from 'react-router-dom';
import JobInfo from "./JobInfo";
import moment from 'moment'
import { FaLocationArrow,FaCalendarAlt,FaBriefcase } from 'react-icons/fa';
import {
  deleteJobs,
  setEditJob
} from "../features/jobs/jobSlice";

const Jobs = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  status,
  createdAt,
}) => {
  const dispatch = useDispatch();
  const date = moment(createdAt).format('MM Do, YYYY');

  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>
            {position}
         </h5>
          <p>
          {company}
          </p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <JobInfo icon={<FaLocationArrow/>} text={jobLocation} />
          <JobInfo icon={<FaCalendarAlt/>} text={date} />
          <JobInfo icon={<FaBriefcase/>} text={jobType} />
          <div className={`status  ${status}`}>{status}</div>
        </div>
        <footer>
          <div className="actions">
            <Link
              to='/add-job'
              className='btn edit-btn'
              onClick={() => {
                dispatch(
                  setEditJob({
                    editJobId: _id,
                    position,
                    company,
                    jobLocation,
                    jobType,
                    status,
                  })
                );
              }}
            >
              edit
            </Link>
            <button
              type='button'
              className="btn delete-btn"
              onClick={() => {
                dispatch(deleteJobs(_id))
              }}
            >
              delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  )
}

export default Jobs