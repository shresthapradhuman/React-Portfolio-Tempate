import React from 'react'
import GoogleMap from '../components/GoogleMap/GoogleMap'
import "../styles/pages/Contact.scss";
import { Information as Data } from "../data/Setting";
import Form from '../components/Form/Contact/Form';

function Contact() {
    return (
      <>
        <div className="box">
          <div className="box__header">
            <div className="box__header-title">
              <span>Get</span> In Touch
            </div>
          </div>
          <div className="box__body">
            <div className="box__map">
              <GoogleMap />
            </div>
            <div className="box__content">
              {Data.map((item)=>(
                item.info.map((info, index)=>{
                   return (
                     <ul key={index}>
                       <li>
                         <span>Address : </span>
                         <span>{info.address}</span>
                       </li>
                       <li>
                         <span>Email : </span>
                         <span>{info.email}</span>
                       </li>
                       <li>
                         <span>Phone : </span>
                         <span>{info.contact}</span>
                       </li>
                       <li>
                         <span>Freelance : </span>
                         <span>{info.freelancer}</span>
                       </li>
                     </ul>
                   );
                })
              ))}
            </div>
          </div>
        </div>
        <div className="box">
          <div className="box__header">
            <div className="box__header-title">
              <span>Contact </span>Form
            </div>
          </div>
          <div className="box__body">
            <Form/>
          </div>
        </div>
      </>
    );
}

export default Contact
