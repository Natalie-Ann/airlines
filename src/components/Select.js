import React from 'react'

const Select = ( { airlines, handleOnSelectAirline }) => {
  return (
    <div>
      <label htmlFor="airline-select">Show routes on</label>
      <select onChange={handleOnSelectAirline} id="airline-select">
        <option value="all">All airlines</option>
        {airlines.map(airline => <option value={airline.name}>{airline.name}</option>)}
      </select>
    </div>
  )
}

export default Select;