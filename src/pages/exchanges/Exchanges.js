import React from 'react'
import { Link } from 'react-router-dom';
import Settings from '../../assets/Imagejs/Settings';
import Inbox from '../../assets/Imagejs/Inbox';
import Anchor from '../../assets/Imagejs/Anchor';
import Togellipse from '../../assets/Imagejs/Togellipse';
import Togrect from '../../assets/Imagejs/Togrect';


function Exchanges() {

const Productexchanges =


  <button className="product_exchange" ><div style={{justifyContent:"space-evenly",display:"flex"}}><Inbox/><div>  <Link to="/Productexchanges" style={{textDecoration:"none"}}><div className="prdexetext"><b style={{fontFamily:"Gilroy-Bold"}}>product</b>exchange.</div></Link></div></div></button>

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
       <div> <button className="exchange"><div style={{justifyContent:"space-evenly",display:"flex"}}><Settings/><div className ="exchangetxt"> <b style={{fontFamily:"Gilroy-Bold"}}>service</b>exchange.</div></div> </button></div>
       <div> {Productexchanges} </div>
       <div> <button className="exchange"><div style={{justifyContent:"space-evenly",display:"flex"}}><Anchor/><div className="exchangetxt"> <b style={{fontFamily:"Gilroy-Bold"}}>venture</b>exchange.</div></div></button></div>
       <div> <button className="exchange"><div style={{justifyContent:"space-evenly",display:"flex"}}><Anchor/><div className="exchangetxt"> <b style={{fontFamily:"Gilroy-Bold"}}>asset</b>exchange.</div></div></button></div>
       <div> <button className="exchange"><div style={{justifyContent:"space-evenly",display:"flex"}}><Anchor/><div className="exchangetxt"> <b style={{fontFamily:"Gilroy-Bold"}}>venture</b>exchange.</div></div></button></div>
       
     </div>
     </div>
    )
}

export default Exchanges

