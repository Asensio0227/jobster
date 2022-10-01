import React from 'react'
import img from '../assets/images/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div className='error-page'>
        <img src={img} alt="not found" />
        <h3>
          ohh! page not found
        </h3>
        <p>we seem to not find the page you're looking for</p>
        <Link to='/'>
          Back Home
        </Link>
      </div>
    </Wrapper>
  )
}


export default Error