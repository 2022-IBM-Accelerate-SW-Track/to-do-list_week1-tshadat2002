import React, { Component } from 'react';
import picture from '../assets/pfp.JPG'
import "./About.css";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div className = "split left">
          <div className = "centered">
            <img className = "profile_image" 
            //image goes here
            src={picture}
            alt = "Profile Pic">
            </img>
          </div>
        </div>
        <div className = "split right">
          <div className='centered'>
            <div className='name_title'> Taohid Shadat </div>
            <div className='brief_description'>
              <p>Hello! My name is Taohid Shadat and I am a rising junior at CUNY Baruch
              College. I am currently studying Computer Information Systems and have
              a strong interest in data science and data analytics.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}