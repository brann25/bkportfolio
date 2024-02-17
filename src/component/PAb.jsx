import React from 'react'
import '../component/Main.css';
import './Component_02.css'

import EleFt from './EleFt';
import EleNav from './EleNav';


import photo from './img/aboutme_photo.png'

function PAb() {
  return (
    <>
    <EleNav />
    <div className="homepage">
        <div className="header">
            <h1>Hello, Brann speaking.</h1>
            <div className="pj-2">
                <p>Glad to see you here, my name is Bannawit and I go by Brann :). My background built of Interior Architecture degree from undergrad and since been working on space design including retails stores across Asian countries. The essential of design did not stop at brick and motar which I link my skills through digitized world where I find myself studying HCI at school of Information, University of Michigan. Now ready to spread this essentially fun part of design across all the realm of tangible designs everywhere!</p>
                <div className="arrow" style={{margin:'5% 30% 0 30%', textAlign:'center'}}><p>resume</p></div>
            </div>
            <div className="pj-2">
                <p>Some of my photography hobbies</p>
                <img src={photo} alt=""/>
            </div>
        </div>
    </div>
    <EleFt />
    </>
  )
}

export default PAb