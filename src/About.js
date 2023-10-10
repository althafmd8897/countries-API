import React from 'react'
import Navbar from './Components/Navbar'

export default function () {
  return (
    <div>
    

<div>

          <Navbar/>

          <h3 className='mt-5 ps-4'>About</h3>

          <p className='mt-3 ps-4'>This site is intended as a simple, easy to use way to explore infomation about the countries and regions of the world.</p>

          <p className='mt-3 ps-4'>All data is courtesy of Mohammed Le Doze's <a href='https://github.com/mledoze/countries'>countries</a>  project on github. As such a massive debt of thanks is owed to <a href='https://github.com/petert82/country-data-interface'> mledoze</a> and all the countries project <a href='https://github.com/petert82/country-data-interface'> contributors.</a></p>

          <p className='mt-3 ps-4'>Site design is copyright (c) 2014 <a href='https://www.petethompson.net/'>Peter Thompson.</a>  Source code is available on  <a href='https://github.com/petert82/country-data-interface' target="_blank"> GitHub.</a></p>

          <h3 className='mt-4 ps-4'>Contact</h3>

          <p className='mt-3 ps-4'>If you have any questions or suggestions regarding this site, please feel free to drop me a line at peter.thompson@dunelm.org.uk.</p>

          <div className='d-flex mt-4 pe-5 justify-content-end'>

           <p> Copyright © 2014-2021 Peter Thompson</p>

          </div>

      </div>
    </div>
  )
}
