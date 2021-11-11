import React from 'react'
import { Link } from 'react-router-dom';
import NavData from '../data/NavData.json'
import Coin from '../assets/Imagejs/Coin';
import Dewallstreet from '../assets/Imagejs/Dewallstreet';
import Map from '../assets/Imagejs/Map';
import Navdown from '../assets/Imagejs/Navdown';

function Navigation() {

    const renderData = NavData.map((Data) => (
        <b>
          <Link to={Data.to} className="Menu_contents">
            {Data.title}
          </Link>
        </b>
      ));

    return (
    <div className='Menu_bg'>
        <div className="Logonav" >
              
              <Link to ="/Navigation" ><Coin/></Link>
              <div>
                <div className="dewallstreettxt"><Dewallstreet/></div>
                <div className="exchangestxt">exchanges.</div>
              </div>
        </div>
        <div className="Navmap">
            <div><Map/></div>
            <div className="universaltxt"><span>Universal</span></div>
            <div className="navdown"><Navdown/></div>
        </div>
        <div style={{marginLeft:"30px"}}>
          <li className='Menu_contents'>
            {renderData}
          </li>
        </div>
    </div>

    )
}

export default Navigation
