import React from 'react';
import './styles.css';
import bannerImg from './banner.png';
import backGround from './hikeBackground.png'
import Logo from '../../common/Logo';
import Categories from '../../common/Menu/MenuItem'
import hikecafelogo from'./hikecafelogo.jpg'

const Banner = ({ handleScrollMenu }) => (

  <header>
    <div className = 'container'>
        <div>
          <img className = 'imageLogo' src = {hikecafelogo}></img>
        </div>
  
  
      </div>
      <div className ='container-content'>
          <h1> Can't Come to the cafe?</h1>
          <br></br>
          <h2 className='sub-heading'> Don't Worry We Got Your Back!</h2> 
          <br></br>

          <h2 style={{color: "#ff7e00"} }>Order Online</h2>
        <button className='button' onClick={handleScrollMenu}>
        <h4 style={{backgroundColor:'#000'}}>View Menu</h4> 

          
           </button>

        </div>

    {/* <div className='header-content'>
      <Logo />  
      <div className='content-main'>
        <h1>Delicious food for your cravings</h1>
        <p>We made fresh and healthy meals with freshest ingredients</p>
          View Menu <i className='fas fa-long-arrow-alt-right'></i>
        </button>
      </div>
    </div>
    <img className='header-img' src={backGround} alt='banner' /> */}
  
  </header>
 
);

export default Banner;
