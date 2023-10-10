import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Cards from './Cards'

export default function Api() {
  const [country, setCountry] = useState([])
  const [search,setSearch]=useState('')
  const fetchData = () => {
    fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setCountry(data)

      })

  }
  useEffect(() => {
    fetchData()
  }, [])

const data = country.filter((val) => {
return val.name.common.toLowerCase().includes(search.toLowerCase())

})
  return (
    <div className="" >
      <Navbar />
      <div >
        <h4 className='ps-4 mt-5'>Search for a Country</h4>
        <input type="text" className="form-control m-4 w-75" placeholder="Enter country name " onChange={(e)  => setSearch(e.target.value)} />

      </div>
      <div className=" d-flex flex-wrap m-3 justify-content-center">
        {
          data.map(count => {
            return (
              <Cards
                lang={(count.languages) ? count.languages : "no language found"}
                name={count.name.common}
                capital={count.capital}
                region={count.region}
                population={count.population}
                continents={count.continents}
                flags={count.flags.png}
              />


            )
          })
        }

      </div>

    </div>
  )
}
