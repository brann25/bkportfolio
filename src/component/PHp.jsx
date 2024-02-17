import React from 'react'

import './Main.css';

import icon1 from './icon/iconUX.png'
import icon2 from './icon/iconHCI.png'
import icon3 from './icon/iconDSGN.png'
import icongo from './icon/right-arrow.png'

import EleNav from './EleNav'
import EleFt from './EleFt';
import {Link} from 'react-router-dom';

import bannerPNC from './img/pnc_banner.png'
import bannerZelle from './img/zelle_banner.png'
import bannerKitchr from './img/kitchr_banner.png'
import bannerArch from './img/archilens_banner.png'
import bannerGraphic from './img/graphic_banner.png'
import bannerInterior from './img/interior_banner.png'
import bannerRetail from './img/retail_banner.jpg'


function PHp() {
 window.scrollTo(0,0);
  return (
    <body id="homebg">
    <EleNav />
    <div className="homepage">
        <div className="header">
            <h1>Glad You're Here...</h1>
            <div className="ribbon">
                <p>Brann Khattiyanont · Product Designer</p>
            </div>
            <div className="ribbon2">
                {/* <div className="icon">
                    <a href="#UX"><img src={icon1} alt="" className="rb-icon"/></a>
                    <span className="tooltip">User Experiences</span>
                </div>
                <div className="icon">
                    <a href="#HCI"><img src={icon2} alt="" className="rb-icon"/></a>
                    <span className="tooltip">HCI</span>
                </div>
                <div className="icon">
                    <a href="#design"><img src={icon3} alt="" className="rb-icon"/></a>
                    <span className="tooltip">Space Designs</span>
                </div> */}
            </div>
            <div className="ribbon3" id="mb-ver">
                <h2 className="topic">UX</h2>
                <h2 className="topic">HCI</h2>
                <h2 className="topic">ID</h2>
            </div>
            <div className="ribbon3" id="pc-ver">
                <a href="#UX" className="topic"><h2>#User Experience</h2></a>
                <a href="#HCI" className="topic"><h2>#Human-Computer Interaction</h2></a>
                <a href="#DSGN" className="topic"><h2>#Interaction Design</h2></a>
            </div>
        </div>
        <div className="project" id="UX">
            <div className="pj-1">
                <Link to= "/project1" className='link1'>
                    <h2>PNC Project</h2>
                    <p id="brief">Offering new PNC customer mobile experience for zillennials whose fast and efficience is their concern! Offering new PNC customer mobile experience for zillennials whose fast and efficience is their concern! Offering new PNC customer mobile experience for zillennials whose fast and efficience is their concern!</p>
                    <div className="tags">
                        <p> <span className="punching"/> Ideation</p>
                        <p> <span className="punching"/> Prototype</p>
                        <p> <span className="punching"/> Diagraming</p>
                        <p> <span className="punching"/> Ideation</p>
                        <p> <span className="punching"/> Prototype</p>
                        <p> <span className="punching"/> Diagraming</p>
                        <p> <span className="punching"/> Prototype</p>
                        <p> <span className="punching"/> Diagraming</p>
                    </div>
                    
                    {/* <img src={bannerPNC} alt="" className="banner" style={{width:'100%', marginTop:'3em', marginBottom:'3em'}}/> */}
                    <div className="arrow"><Link to= "/project1"><a>learn more...</a></Link></div>
                </Link> 
            </div>
            <div className="pj-1">
                <h2>Travel Project</h2>
                <p id="brief">Links better with friends and financials in every important moment of life!</p>
                <div className="tags">
                    <p> <span className="punching"/> skill sets</p>
                    <p> <span className="punching"/> skill sets</p>
                    <p> <span className="punching"/> skill sets</p>
                </div>
                {/* <img src={bannerZelle} alt="" className="banner" style={{width:'100%', marginTop:'-1em'}}/> */}
                <div className="arrow"><Link to= "/project2"><a>learn more...</a></Link></div>
            </div>

            <div className="pj-1">
            <Link to= "/project3" className='link1'>
                <h2>Kitchr Project</h2>
                <p id="brief">Find ingredients-cooking mate-sharing kitchen in your area!</p>
                <div className="tags">
                    <p> <span className="punching"/> Ideation</p>
                    <p> <span className="punching"/> Prototype</p>
                    <p> <span className="punching"/> Diagraming</p>
                </div>
                {/* <img src={bannerKitchr} alt="" className="banner" style={{width:'100%',marginTop:'0.5em'}}/> */}
                <div className="arrow"><Link to= "/project3"><a>learn more...</a></Link></div>
            </Link>
            </div>

        </div>
        <div className="project" id="HCI">
            <div className="pj-1">
                <h2>GrooveTap Project</h2>
                <div className="tags">
                    <p> <span className="punching"/> skill sets</p>
                    <p> <span className="punching"/> skill sets</p>
                    <p> <span className="punching"/> skill sets</p>
                </div>
                <div className="arrow"><p>learn more...</p></div>
            </div>
            <div className="pj-1">
                <h2>Smart Mirror Project</h2>
                <div className="tags">
                    <p> <span className="punching"/> skill sets</p>
                    <p> <span className="punching"/> skill sets</p>
                    <p> <span className="punching"/> skill sets</p>
                </div>
                <div className="arrow"><p>learn more...</p></div>
            </div>
            <div className="pj-1">
                <Link to= "/project3" className='link1'>
                    <h2>Archilens</h2>
                    <div className="tags">
                        <p> <span className="punching"/> Ideation</p>
                        <p> <span className="punching"/> Prototype</p>
                        <p> <span className="punching"/> Diagraming</p>
                    </div>
                    {/* <img src={bannerArch} alt="" className="banner" style={{width:'80%'}}/> */}
                    <div className="arrow"><Link to= "/project3"><a>learn more...</a></Link></div>
                </Link>
            </div>
        </div>
        <div className="project2" id="DSGN">
            <div className="pj-3">
                <Link to= "/project7" className='link1'>
                    <h2>Graphic Designs</h2>
                    <img src={bannerGraphic} alt="" className="banner2" />
                    <div className="arrow" style={{margin:'auto', width:'30%'}}><Link to= "/project7"><a>learn more...</a></Link></div>
                </Link>
            </div>
            <div className="pj-3">
                <Link to= "/project8" className='link1'>
                <h2>Interior Designs</h2>
                <img src={bannerInterior} alt="" className="banner2" />
                <div className="arrow" style={{margin:'auto', width:'30%'}}><Link to= "/project8"><a>learn more...</a></Link></div>
                </Link>
            </div>
            <div className="pj-3">
                <Link to= "/project9" className='link1'>
                <h2>Retail Designs</h2>
                <img src={bannerRetail} alt="" className="banner2" />
                <div className="arrow" style={{margin:'auto', width:'30%'}}><Link to= "/project9"><a>learn more...</a></Link></div>
                </Link>
            </div>
        </div>
    </div>
    <EleFt />          
    </body>
  )
}

export default PHp