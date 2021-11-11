import React from 'react'
import { Link } from 'react-router-dom';
import NavData from '../data/NavData.json'
import Coin from '../assets/Imagejs/Coin';
import Dewallstreet from '../assets/Imagejs/Dewallstreet';
import Map from '../assets/Imagejs/Map';
import Navdown from '../assets/Imagejs/Navdown';
import {useState} from 'react';

function Navigation() {

  const [state, setState] = useState({ clicked: false, name: "option" });
  function clickHandler() {
    setState({
      clicked: !state.clicked,
      name: state.clicked ? "option" : "optionclicked",
    });
  }

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
              
              <Link to ="/" ><Coin/></Link>
              <div>
                <div className="dewallstreettxt"><Link to ="/Navigation" ><Dewallstreet/></Link></div>
                <div className="exchangestxt">exchanges.</div>
              </div>
        </div>
        {/* <div className="Navmap">
            <div><Map/></div>
            <div className="universaltxt"><span>Universal</span></div>
            <div className="navdown"><Navdown/></div>
        </div> */}
        <div>
        <div className="Navmap" onClick={clickHandler}>
        <div><Map/></div>
            <div className="universaltxt"><span>Universal</span></div>
            <div className="navdown"><Navdown/></div>
        </div>
        <div className="dropdownDown">
          <div className={state.name} onClick={clickHandler}>
            Universal
          </div>
          <div className={state.name} onClick={clickHandler}>
            India
          </div>
          <div className={state.name} onClick={clickHandler}>
            Somalia
          </div>
          <div className={state.name} onClick={clickHandler}>
            Iraq
          </div>
        </div>
      </div>
        <div style={{marginLeft:"-10px"}}>
          <li className='Menu_contents'>
            {renderData}
          </li>
        </div>
    </div>

    )
}

export default Navigation
