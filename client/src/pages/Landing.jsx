import styled from 'styled-components';
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import logo from '../assets/images/logo.svg';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="jobify" className='logo' />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span>app
            </h1>
           <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia reprehenderit eum vel numquam ipsa maxime voluptatum culpa sunt obcaecati eveniet ipsam totam quia ad accusantium facere aliquid optio, ipsum debitis.
            </p> 
            <Link to='/register' className='btn register-link'>
            Register
            </Link>
            <Link to='/login' className='btn'>
            Login / Demo User
            </Link>
        </div>
        <img src={main} alt="job hunt" className='img main-img' />
      </div>
    </Wrapper>
  );
};


export default Landing;
