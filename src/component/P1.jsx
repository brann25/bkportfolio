import React from 'react'
// import './Component.css'
import './Component_02.css'
import EleFt from './EleFt'
import EleNav from './EleNav'

import pnc_goal from './img/PNC/banner_pnc_goal.png';
import pnc_issues from './img/PNC/banner_pnc_issues.jpg'
import pnc_keys from './img/PNC/banner_pnc_keys.jpg'
import pnc_hueristic from './img/PNC/pnc_hueristic.jpg'
import pnc_flow1 from './img/PNC/PNC_flow1.jpg'
import pnc_flow2 from './img/PNC/PNC_flow2.jpg'

function P1() {
  window.scrollTo(0,0);
  return (
    <>
    <EleNav />
    <body id="pncBody">
    <div className="aboutme-wraper">
      <div className="opener">
        <h1 style={{color:'#4169E1', fontWeight:'bold', marginTop:'0em'}}>PNC Project</h1>
        <p style={{color:'grey'}}>UX Research and Design ∙ Individual Project ∙ Independent ∙ - Weeks</p>
        <p> Offering new PNC customer mobile experience for zillennials whose fast and efficience is their concern! </p>
      </div>
      <div className="opener">
        <h3 className='subhead' style={{backgroundColor:'#4169E1'}}>Expected Scenario</h3>
        <p>This is how we expect the users to feel once they choose to online banking on PNC!</p>
      </div>
      <div className="project-banner-container">
          <div className="project-banner-img">
              <img src={pnc_goal} alt="" className="intro" />
          </div>
      </div>
      <div className="m-state">
        <div className="state">
          <h2>Problem Statement</h2>
          <h4>"Takes too much time to understand the system and seemingly hard to find other financial functions"</h4>
          <p>Complexity and inconsistency in information architecture and design flow slows down the process of using PNC mobile app. Lack of space to encourage opportunity to promote users benefit and the banks' other businesses.</p>
        </div>
        <div className="state">
          <h2>Target Audiences</h2>
          <h4>"Low-income individual Zennials who live from paycheck to paycheck"</h4>
          <p>As the gap between income disparity widen and financial situation became even more stressful to many after post-covid abnormality, money moved as a center of our target customer's attention daily.</p>
        </div>
        <div className="state">
          <h2>Value Preposition</h2>
          <h4>"Shorten function browsing time and offer more bank's function in freindly manner"</h4>
          <p>We offer PNC revisioned mobile banking app for Zennials with financial burden post-pandemic by delivering maximum 3 click away to their desination on the app and accessing more functions by friendly suggestions inside our app in contrast to our current version in the market.</p>
        </div>
      </div>

      <h3 className='subhead' style={{backgroundColor:'#4169E1'}}>Background Research</h3>
      <div className="background-research">
        <div className="bg-red-l">
          <img src={pnc_issues} alt="" />
        </div>
        <div className="bg-red-r">
          <div>
            <h3>Who is PNC?</h3>
            <p>PNC is a national banking service that based in Pittsburg, PA. The recent merge with BBVA has expands PNC location to cover not only the Midwest and Eastern regions but also the South and Westcoast region as well.</p>
          </div>
          <div>
            <h3>Original target customer?</h3>
            <p>They prioritized local customer, as their one of the slogan " Main Street Bank"</p>
            <p>PNC service includes large segments of individual and business transaction and wealth management. The online banking is one of the key segments that make PNC attractive, it allows individual to perform financial decision and transaction faster.</p>
          </div>
          <div>
            <h3>What is the key product to their app?</h3>
            <p>Zelle is the most prominent key feature to the app, and the following list of fucntions:</p>
            <ul>
              <li>Manage your Spend account</li>
              <li>Manage your cards</li>
              <li>Make deposits</li>
              <li>Access an ATM without your card</li>
              <li>Zelle</li>
              <li>Budget</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className='subhead' style={{backgroundColor:'#4169E1'}}>Identify Key Problems</h3>
      <div className="key-problems">
        <div className="bg-red-l">
          <div>
            <h3>Advantage and disadvantage to other Traditional bankings?</h3>
            <p>PNC Online banking allows users to complete their financial transaction faster, like others traditional banks. The competitive edge that the PNC online baking can offer are stability, convenient and accuracy has gap to be improved.</p>
          </div>
          <div>
            <h3>Advantage and disadvantage to Neo-Banking?</h3>
            <p>Seemingly, a few outstanding advantage points PNC has over these financial technology companies are 'name' with physical branches that guarantee someone to help, and reliable fund security. However, technology-wise from customer-centered design to data analytics to support customers might be the concerning topic PNC should take a closer look into.</p>
          </div>
          <div>
            <h3>Advantage and disadvantage to Paypal, Apple Pay, Venmo</h3>
            <p>PNC banking offers more options to fund management not only spending. These virtual wallet is easy to use and gaining more users but still required linking to existing deposited account for their debit-like usage. PNC has Zelle responding to the need of this function, but there is design and process gap to be improved.</p>
          </div>
        </div>
        <div className="bg-red-r">
          <img src={pnc_keys} alt="" />
        </div>
      </div>

      <h3 className='subhead' style={{backgroundColor:'#4169E1'}}>Users and Market Analysis</h3>
        <div className="img-container">
          <img src={pnc_flow1} alt="" id="chart"/>
        </div>
        <div className="img-container">
          <img src={pnc_flow2} alt="" id="chart"/>
        </div>
      <h3 className='subhead' style={{backgroundColor:'#4169E1'}}>Hueristic Evaluation</h3>
      <img src={pnc_hueristic} alt="" style={{width:'100%'}}/>
      <h3 className='subhead' style={{backgroundColor:'#4169E1'}}>Prototype</h3>

      <h3 className='subhead' style={{backgroundColor:'#4169E1'}}>Usability testing</h3>
    </div>
    </body>
    <EleFt />
    </>
  )
}

export default P1