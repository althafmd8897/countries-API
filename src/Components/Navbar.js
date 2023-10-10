import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div >
      <nav class="navbar bg-body-tertiary p-3">
        <div class="container-fluid">
          <Link className="world" to='/'>Countries of the World</Link>
          <Link className="about" to='/about'>About</Link>
        </div>
      </nav>


    </div> 
  )
}
