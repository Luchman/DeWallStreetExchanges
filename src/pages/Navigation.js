import React from 'react'
import NavData from '../data/navdata.json'
import Coin from '../assets/Imagejs/Coin';
import Dewallstreet from '../assets/Imagejs/Dewallstreet';
import Map from '../assets/Imagejs/Map';
import Navdown from '../assets/Imagejs/Navdown';
import {useState} from 'react';
import {useHistory} from "react-router";

function Navigation() {

  const history = useHistory();

  const [state, setState] = useState({ clicked: false, name: "option" });
  function clickHandler() {
    setState({
      clicked: !state.clicked,
      name: state.clicked ? "option" : "optionclicked",
    });
  }
 
    const renderData = NavData.map((Data) => (
        <b className="Menu_contents" onClick={()=>{history.push(Data.to)}}>
         
            {Data.title}
          
        </b>
      ));

    return (
    <div className='Menu_bg'>
        <div className="Logonav" >
              
              <div onClick={()=>{history.push("/")}} ><Coin/></div>
              <div>
                <div className="dewallstreettxt" onClick={()=>{history.push("/Navigation")}} ><Dewallstreet/></div>
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