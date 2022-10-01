import React from 'react';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import {Link} from 'react-router-dom'
import {
  Logo,
} from '../components'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo/>
      </nav>
      <article className='container page'>
        <div className='info'>
        <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby typewriter mumblecore sartorial, sustainable bushwick health goth ea austin quis you probably haven't heard of them dreamcatcher gluten-free vegan. Tattooed chartreuse vice forage, small batch enim waistcoat enamel pin vexillologist PBR&B deserunt. DIY pabst biodiesel aliquip JOMO stumptown aesthetic ascot. Vice banh mi tilde.
          </p>
          <Link to='/register' className="btn btn-hero">
            login/register
          </Link>
        </div>
        <img src={main} alt="job hunt" className='img main-img' />
      </article>
    </Wrapper>
  )
}

export default Landing