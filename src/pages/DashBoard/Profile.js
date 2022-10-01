import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { Form } from '../../components';
import { updateUser } from '../../features/user/userSlice';


const Profile = () => {
  const { isLoading, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    lastName: user?.lastName || '',
    location: user?.location || ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, lastName, location } = userData;
    if (!name || !email || !lastName || !location) {
      toast.error('please fill out all fields');
      return;
    }
    dispatch(updateUser({name,email,lastName,location}))
  }

  const onChange = (e) => {
    const name = e.target.name; 
    const value = e.target.value; 
    setUserData({ ...userData, [name]: value });
  }

  const { name, email, lastName, location } = userData;

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>profile</h3>
        <div className="form-center">
          {/* name */}
          <Form
            type='text'
            name='name'
            id='name'
            value={name}
            handleChange={onChange}
          />
          {/* lastName */}
          <Form
            type='text'
            id='lastName'
            labelText='last name'
            name='lastName'
            value={lastName}
            handleChange={onChange}
          />
          {/* email */}
          <Form
            type='text'
            name='email'
            id='email'
            value={email}
            handleChange={onChange}
          />
          {/* location */}
          <Form
            type='text'
            name='location'
            id='location'
            value={location}
            handleChange={onChange}
          />
          <button
            type='submit'
            className="btn btn-block"
            disabled={isLoading}
          >
            {isLoading ? 'please wait...' : 'save changes'}
          </button>
        </div>
      </form>
    </Wrapper>
  );
}

export default Profile
