import React from 'react'

export default function Cards(props) {
  const { lang, name, region, population, continents, flags } = props
  return (
    <div className='card'>  
      <ul class="list-group mt-3 flex-wrap  m-3 ">
        <li class="list-group-item active" aria-current="true"> Name :{name}</li>
        <li class="list-group-item"> Languages : {Object.values(lang)[0]}</li>
        <li class="list-group-item">Region :{region}</li>
        <li class="list-group-item">Population:{population}</li>
        <li class="list-group-item">Continents:{continents}</li>
        <li class="list-group-item"><img src={flags} height={100} /></li>
      </ul>
    </div>
  )
}
