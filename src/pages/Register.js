import React,{useState,useEffect} from 'react'
import {
  Logo,
  Form,
}from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import {loginUser,registerUser} from '../features/user/userSlice'
import { useNavigate } from 'react-router-dom';

const initialstate = {
  name: '',
  email: '',
  password: '',
  isMember:true,
}


function Register() {
  const [values, setValues] = useState(initialstate);
  const { isLoading, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, password, email,isMember } = values;
    if (!email || !password || (isMember && name)) {
      toast.error('Please fill out all fields');
      return
    } else {
      setValues({
        name: '',
        email: '',
        password: '',
        isMember:true,
      })
    }
    if (isMember) {
      dispatch(loginUser({ email: email, password: password }));
      return
    }
    dispatch(registerUser({ name,email,password}))
  }

  const toggleMember = () => {
    setValues({...values, isMember: !values.isMember});
  }

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/')
      }, 3000);
    }
  },[user,navigate])

  return (
    <Wrapper className='full-page'>
      <form className="form" onSubmit={onSubmit}>
        <Logo className='logo' />
        <h3>{values.isMember ? 'login' : 'register'}</h3>
        {!values.isMember && (
          <Form
            type='text'
            name='name'
            value={values.name}
            handleChange={onChange}
          />
        )}
        
        <Form
          type='email'
          name='email'
          value={values.email}
          handleChange={onChange}
        />
        <Form
          type='password'
          name='password'
          value={values.password}
          handleChange={onChange}
        />
        <button
          type='submit'
          className="btn btn-block"
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'submit'}
        </button>
        <button
          type='button'
          className="btn btn-block btn-hipster"
          disabled={isLoading}
          onClick={() => {
            dispatch(loginUser({ email: 'testUser@test.com', password: 'secret' }));
          }}
        >
          {isLoading ? 'Loading...' : 'demo'}
        </button>
        <p>
          {values.isMember ? 'Not yet a member' : 'Already a member'}
          <button
            type='button'
            onClick={toggleMember}
            className="member-btn">
            {!values.isMember ? "Login" : 'Register'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
}



export default Register
