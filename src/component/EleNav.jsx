import React from 'react'
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

function EleNav() {
  return (
    <>
    <div className="nav-bar">
        <a href="">resume</a>
        <a href="">linkedIn</a>
        <Link to= "/about_me">about me</Link>
    </div>
    <div className="back-button">
      <Link to ='/'>
      <FontAwesomeIcon icon={faHouse} size="xl" style={{color: "#ffffff",}} />
      </Link>
    </div>
    </>
  )
}

export default EleNav