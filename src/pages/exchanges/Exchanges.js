import React from 'react'
import Settings from '../../assets/Imagejs/Settings';
import Inbox from '../../assets/Imagejs/Inbox';
import Anchor from '../../assets/Imagejs/Anchor';
import Togellipse from '../../assets/Imagejs/Togellipse';
import Togrect from '../../assets/Imagejs/Togrect';
import { useHistory } from "react-router-dom";


function Exchanges() {

const history = useHistory();


    return (
        <div className="menu_buttons" >
        <div className="main_content">
        <div><span> securities </span></div>
        <div>
          <div className="Togrect">
            <Togrect/>
          </div>
          <div className="Togellipse">
            <Togellipse/>
          </div>
        </div>
        <div><span>deriviatives</span></div>
       <div> <button className="exchange" onClick={()=>{history.push("/")}}><div style={{justifyContent:"space-evenly",display:"flex"}}><Settings/><b style={{fontFamily:"Gilroy-Bold"}}>service</b>exchange.</div> </button></div>
       <div> <button className="exchange" onClick={()=>{history.push("/Exchanges/Productexchange")}}><div style={{justifyContent:"space-evenly",display:"flex"}}><Inbox/><b style={{fontFamily:"Gilroy-Bold"}}>product</b>exchange.</div> </button></div>
       <div> <button className="exchange" onClick={()=>{history.push("/")}}><div style={{justifyContent:"space-evenly",display:"flex"}}><Anchor/> <b style={{fontFamily:"Gilroy-Bold"}}>venture</b>exchange.</div></button></div>
       <div> <button className="exchange" onClick={()=>{history.push("/")}}><div style={{justifyContent:"space-evenly",display:"flex"}}><Anchor/> <b style={{fontFamily:"Gilroy-Bold"}}>asset</b>exchange.</div></button></div>
       <div> <button className="exchange" onClick={()=>{history.push("/")}}><div style={{justifyContent:"space-evenly",display:"flex"}}><Anchor/> <b style={{fontFamily:"Gilroy-Bold"}}>venture</b>exchange.</div></button></div>
       
     </div>
     </div>
    )
}

export default Exchanges

