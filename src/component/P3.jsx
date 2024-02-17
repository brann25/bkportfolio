import React from 'react'
import './Component.css'
import banner from './project-img/P1_Banners.jpg'
import story from './gif/P1_Storyboard.gif'
import { Link } from 'react-router-dom';

//Prototype
import proto1 from './project-img/P1_Prototype_01.png'


///competitor
import compet1 from './project-img/P1_compet1.png'
import compet2 from './project-img/P1_compet2.png'

import sb1 from './project-img/P1_Sketching Alternatives_Page_1.jpg'
import sb2 from './project-img/P1_Sketching Alternatives_Page_2.jpg'
import sb from './project-img/P1_storyboard.png'

import persona1 from './project-img/P1_Persona-01.jpg'
import persona2 from './project-img/P1_Persona-02.jpg'
import persona3 from './project-img/P1_Persona-03.jpg'
import persona4 from './project-img/P1_Persona-04.jpg'
import psn from './project-img/P1_persona.png'

import sol1 from './project-img/P1_Sol1.jpg'
import sol2 from './project-img/P1_Sol2.jpg'
import sol from './project-img/P1_Sol.png'

import mapping1 from './project-img/P1_Flow Chart-01.png'
import mapping2 from './project-img/P1_Flow Chart-02.png'
import mapping from './project-img/P1_Flow Chart.png'

import QOC1 from './project-img/P1_QOC Diagram-01.png'
import QOC2 from './project-img/P1_QOC Diagram-02.png'
import QOC3 from './project-img/P1_QOC Diagram-03.png'

import wf1 from './project-img/P1_Wireframe.png'
import EleNav from './EleNav';
import EleFt from './EleFt';

export default function Page_Project1() {
  window.scrollTo(0,0);
  return (
    <>
    <EleNav />
    <div className="aboutme-wraper">
      {/* <div className="compact">
        <img src={logo} width="10%" height="10%" class="d-inline-block align-top" alt=""/>
        <div className=""><a><Link to ='/'>Home</Link></a></div>
      </div> */}
      <div className="project-banner-container">
          <div className="project-banner-img">
              <img src={banner} alt="" className="intro" />
          </div>
      </div>
      <div className="opener">
        <h1 style={{color:'#F48020', fontWeight:'bold', marginTop:'1em'}}>Kitchr</h1>
        <h4 style={{marginTop:'-0.6%'}}>Make sharing fulfilling!</h4>
        <p style={{color:'grey'}}>UX Research and Design ∙ Individual Project ∙ Academic ∙ 12 Weeks</p>
        <p> Kitchr is a prototype project that aimed to tackle nutrition and food variety issues for university students by creating comunity-based solutions to allow student to cook together and links them with local fresh shops. </p>
      </div>
      <div className="opener">
        <h3 className='subhead'>Expected Scenario</h3>
        <p>This is how we expect the users to feel once they choose to solve their cooking problems with our application!</p>
      </div>
      <img src={story} alt="" className="story" />

      <div className="detail-container">
        <div className="topic-info">
          <div className="ti-col">
            <h5 style={{marginTop:'0.5em', fontWeight:'bold', textAlign:'center'}}>Problem Statement</h5>
            <p style={{marginTop:'1.5em', fontSize:'1.2em', backgroundColor:'#F4EEE4', borderRadius:'0.8em', padding:'0.5em', textAlign:'center'}}>"It's hard to find cheap, good, and variety of food in college towns"</p>
            <p style={{marginTop:'1.5em'}}>We are looking at Ann Arbor as the prototype college town in the US, where more than 34% of students come from other states and countries [1][2], they have to face a high price for food and a low variety of options. This could create nutrition problems and mental health that follows.</p>
          </div>
          <div className="ti-col">
             <h5 style={{marginTop:'0.5em', fontWeight:'bold', textAlign:'center'}}>Target Audience</h5>
             <p style={{marginTop:'1.5em', fontSize:'1.2em', backgroundColor:'#F4EEE4', borderRadius:'0.8em', padding:'0.5em', textAlign:'center'}}>"University students who like to cook to add more variety and nutrition to their meals"</p>
             <p style={{marginTop:'1.5em'}}>The focused group includes students from college to Ph.D. who have to live alone and depend on cooking mainly to fulfill everyday needs. How could we help them access better choices on daily basis?</p>
          </div>
          <div className="ti-col">
             <h5 style={{marginTop:'0.5em', fontWeight:'bold', textAlign:'center'}}>Solution Overview</h5>
             <p style={{marginTop:'1.5em', fontSize:'1.2em', backgroundColor:'#F4EEE4', borderRadius:'0.8em', padding:'0.5em', textAlign:'center'}}>"Using cooking and friendship as the media with the tie to local shops for fresh ingredients to enhance food variety and nutrition"</p>
             <p style={{marginTop:'1.5em'}}>After analysis and finding the most practical way without changing a larger system or investing in large infrastructure, we are building a 'community-based' solution where students can help each other out via mobile phones that they can carry around anywhere they go.</p>
          </div>
        </div>

        <div className="final-product">
          <div className="opener">
            <h3 className='subhead'>High-Fidelity & Revision</h3>
            <p style={{marginTop:'1.5em'}}> The high-fidelity here is the latest version after 2 usability tests from possible users. The study suggests this version be more seamless across each the features in the app. Now users can search for friends to cook with and ingredients more simultaneously when they need, and host a kitchen with friends if they like.</p>
          </div>
            <img src={proto1} alt="" className="intro" style={{marginTop:'3%'}}/>
            <div className="opener">
            <h5 style={{marginTop:'0.5em', fontWeight:'bold', textAlign:'center'}}>Prototype Model Flow</h5>
            <a href="https://xd.adobe.com/view/c66fc9a4-b1a0-47c5-8258-2e15aee5e51b-933c/?fullscreen" target="_blank" rel="noopener noreferrer"><p style={{marginTop:'1.5em', color:'black',backgroundColor:'#F4EEE4', borderRadius:'0.8em', padding:'2em', textAlign:'center', alignContent:'center', textDecoration:'none'}}>Adobe XD Prototype</p></a>
         </div>

         <iframe style={{marginTop:'1.5em'}} width="700" height="500" src="https://www.youtube.com/embed/r2KErIHMy3c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       
         <div className="opener">
            <h5 className='com-non' style={{marginTop:'0.5em', fontWeight:'bold', textAlign:'center'}} >High-Fidelity Draft 1</h5>
            <p className='com-non'style={{marginTop:'1.5em', textAlign:'left'}}>Before coming to the final model, I have put the prototype for usability test again. I use information and opinion from this test to improve the flow and combine function to be more seamless within the app. As we can see from this draft where each functions are almost completely separated. Moreover, we found that sharing old ingredients can be hard for most people to accept because of the doubt, we focus more on cooking together and buying new ingredients from local store which still answers our goal to target affordable and various nutrition for college students.</p>
        </div>

        <iframe style={{marginTop:'1.5em'}} width="700" height="500" src="https://www.youtube.com/embed/iTgeFr9XPWs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <div className="opener">
          <h3 className='subhead'>Story Board</h3>
          <p style={{marginTop:'1.5em'}}> This process is the top 5 solutions, telling us what would happen if the users face issues raised in the problem statement and do not have 'Kitchr'</p>
        </div>
        <div className="storyboard">
              <img src={sb} className="compet"/>
        </div>

        <div className="opener">
          <h3 className='subhead'>Persona</h3>
          <p style={{marginTop:'1.5em'}}> Composing of 3 possible users which is a student who seek more variety of food and would thrive if cooking with someone else.</p>
        </div>
        <div className="storyboard">
              <img src={psn} className="compet"/>
        </div>

        <div className="opener">
          <h3 className='subhead'>Alternative Solutions</h3>
          <p style={{marginTop:'1.5em'}}> Before coming to the character and their actions specifically to our target, the alternate tasks allow the process to develop a stronger choice that is viable and helpful for the problem statement in general.</p>
        </div>
        <div className="storyboard">
              <img src={sol} className="compet"/>
        </div>

          <div className="topic-info" style={{marginTop:'2.5em'}}>
            <div className="ti-col">
              <h5 style={{marginTop:'0.5em', fontWeight:'bold', textAlign:'center'}}>Sketching Technique</h5>
              <p style={{marginTop:'1.5em'}}>The sketches start from the possibilities of the solution to the storyboard to check how users’ flows are when they have to deal with the problem statement when our solution is yet to exist. I choose to develop the project from the idea of how user flow should be on the Miro.com board and started creating the layout and wireframe of each page by Illustrator after pickup from the sketches, then transfer them into low and develop the high-fidelity on Figma desktop where most design and artwork did in Adobe Illustrator.</p>
            </div>
            <div className="ti-col">
              <h5 style={{marginTop:'3%', fontWeight:'bold', textAlign:'center'}}>Pros: Current Approach</h5>
              <p style={{marginTop:'1.5em'}}>Pros: It is fast to come up with the solution without checking with enough testers in the process which allows us to create a lot of ideas and sprint to the final product faster. Additionally, this approach from making sure we are on the right track to tackle the problem we propose in the beginning. </p>
            </div>
            <div className="ti-col">
              <h5 style={{marginTop:'3%', fontWeight:'bold', textAlign:'center'}}>Cons: Current Approach</h5>
              <p style={{marginTop:'1.5em'}}>Cons: there is not enough time to make sure if the flow really works or if the solution will really respond to the public. If we can add more phases where we can deal with data from either databases or interviews, I believe the app could be closer to reality.</p>
            </div>
          </div>

          <div className="opener">
            <h3 className='subhead'>Flow and Functionality Study</h3>
            <p style={{marginTop:'1.5em'}}> Study of how to put select and arrange each function and feature in sequence that make sense for users. The flows are considered from tendency of users concerns from security, food safety, and convenience.</p>
          </div>
          <div className="storyboard">
                <img src={mapping} className="compet"/>
          </div>

          <img src={QOC1} alt="" className="compet" style={{width:'33.33%'}}/>
          <img src={QOC2} alt="" className="compet" style={{width:'33.33%'}}/>
          <img src={QOC3} alt="" className="compet" style={{width:'33.33%'}}/>

          <div className="opener">
            <h3 className='subhead'>Wireframe and Low-Fidelity</h3>
            <p style={{marginTop:'1.5em'}}>This is the basic foundation of app thoughts, before getting possible users to test and see that the flow need to be more seam less across features provided in the app.</p>
          </div>
          <div className="storyboard">
              <img src={wf1} className="compet"/>
          </div>

          <div className="topic-info" style={{marginTop:'2.5em'}}>
            <div className="ti-col">
              <h5 style={{marginTop:'3%', fontWeight:'bold', textAlign:'center'}}>Design Progression</h5>
              <p style={{marginTop:'1.5em'}}>From the initial sketches and idea that the solution could focus more on how to get students to access ingredients for cooking for cheaper prices which have to deal with the distribution of products and storing a large number of items or delivering items to users like how Instacard or Gopuff that I have done in the competitor analysis, after doing sketch solution, storyboard, and persona, I have found out that the solution could be simpler by creating a connection and let students help each other out in a community level could be another option that is practical and easy to implement.</p>
            </div>
            <div className="ti-col">
              <h5 style={{marginTop:'3%', fontWeight:'bold', textAlign:'center'}}>Design Philosophy </h5>
              <p style={{marginTop:'1.5em'}}>The main design philosophy in this app includes simplicity and security. We would like to make sure that users feel safe and have enough information to make a decision hence there are more questions at every step. On the other hand, I believe that having a limited filtered map for each feature will also help them narrow down choices and get them to focus and understand each function easier according to Hick’s Law explained by  Lidwell et al. (2010) but there is still need to be more consideration that if the map is more open which include all feature within just the first page which users can choose to filter out what they want at that moment of using would be better in term of seamless experiences they will gain from the app.</p>
            </div>
            <div className="ti-col">
              <h5 style={{marginTop:'3%', fontWeight:'bold', textAlign:'center'}}>Impact</h5>
              <p style={{marginTop:'1.5em'}}>This app is meant to help society from the student's community level which is large and will enable them to battle the hunger and nutrition problems that could hinder them from their best ability at school. The project is scalable and not only unique only to the University of Michigan and can also be applicable at other universities across the US as well. Additionally, not only this app is will combat will the food and well-being of students but also create communities where they can connect students together through activities they do together, I believe it could help lessen the boundary for students from different schools and even their educational degrees they are studying as well. The form of connection will make the tide stronger at both domestic and international levels from a connection that has been made which will be beneficial to society as a whole in the end. </p>
            </div>
          </div>
      </div>

      <div className="reference-container">
        <h5 style={{marginTop:'3%', fontWeight:'bold', textAlign:'left'}}>Reference</h5>
        <div className="ref" style={{marginTop:'1.5em'}}>
          <p>[1] The University of Michigan Facts and Figures 2022. Michigan Creative, a unit of the Office of the Vice President for Communications. University of Michigan. https:// guides.lib.umich.edu/c.php?g=282964&p=1885442 </p>
          <p>[2] Buhr, Michael. “University of Michigan Student Life.” International Center, University of Michigan, 20 Nov. 2020. https:// internationalcenter.umich.edu/sites/default/files/ Annual_Report.pdf</p>
          <p>[3] Gibbons, Sarah. “UX Mapping Methods Compared: A Cheat Sheet.” Nielsen Norman Group, 5 November 2017, https://www.nngroup.com/articles/ux-mapping-cheat-sheet/. Accessed 30 November 2022.</p>
          <p>[4] “Chapter 2: The Process of Interaction Design” in Helen Sharp, Jennifer Preece, and Yvonne Rogers. 2019. Interaction Design: Beyond Human-Computer Interaction (5th ed.). Wiley.</p>
          <p>[5] Lidwell, William, et al. Universal Principles of Design, Revised and Updated : 125 Ways to Enhance Usability, Influence Perception, Increase Appeal, Make Better Design Decisions, and Teach through Design, Quarto Publishing Group USA, 2010. ProQuest Ebook Central, http://ebookcentral.proquest.com/lib/umichigan/detail.action?docID=3399678. Created from umichigan on 2021-07-14 19:35:09.</p>
          <p>[6] Images from https://unsplash.com/, Accessed November 2022:     Section 1:     User 1: Alexander Hipp, User 2: Dahiana Waszaj, User 3: Christian Buehner     Section 2:     Sugar: John Cutting, Spice: Timothy Newman, Garlic: Joe Green, Ketchup: DL Samuels, Salsa: Tai’s Capture, Chillies: Thomas M Evans, Mayonnaise: Evan Reimer, Fried Rice: Louis Hansel, Section 3: Short Grain, Red Bean, Flake, Corn, Brown Rice: Lukasz Rawa, Long Grain: Pierre Bamin, Granola: Abhishek Hajare, Section 4: Kitchen: Camylla Battani, Section 5: Rice: Lukasz Rawa, Spice: Nisuda Nirmantha, Meat: Cindie Hansen, Vegetable: Cyrus Crossan, Oil: Roberta Sorge, Fruit: Zaib Tse</p>
          <p>[7] Images from https://www.argusfarmstop.com/, Accessed November 2022: Argus Logo </p>
          <p>[8] Images from https://peoplesfood.coop/, Accessed November 2022: People Food Logo </p>
          <p>[9] Images from https://commons.wikimedia.org/, Accessed November 2022: Kroger Logo (Originally from http://www.kroger.com/ Date 6 November 2019)</p>
          <p>[10] Images from https://en.wikipedia.org/, Accessed November 2022: Target Logo(Originally, date September 2007) </p>
          <p>[11] Images from https://commons.wikimedia.org/ Accessed November 2022: Visa Logo(Originally from http://www.visa.com/ Date 2005) </p>
          <p>[12] QOC Diagram Study Reference: MacLean, Allan, et al. Design Rationale: Concepts, Techniques, and Use, edited by Thomas P. Moran, Taylor & Francis Group, 2020. Accessed 26 October 2022.</p>
          <p>[13] Prototype images from Unsplash.com, Pexels.com, RandomUser.me, ThisPersonDoesNotExist, Generated.photos</p>
          <p>[14] Prototype icons Awesome, Ionic, Simple</p>
        </div>
      </div>
    </div>
    </div>
    <EleFt />
    </>
  )
}
