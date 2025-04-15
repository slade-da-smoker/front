import React from 'react'
import {Link} from 'react-router-dom'

const Landing = () => {
  return (
    <div>Landing
      <Link to='/upload'> Start-IDcard-creation-process</Link>
      <br />
      <Link to='/exam-form'>Create your Exam Card</Link>
      <br />
      <Link to='/documentation'>Proceed to General Documentation</Link>
    </div>
  )
}

export default Landing