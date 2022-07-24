import React from 'react'

// const Select = ( { airlines, handleOnSelectAirline }) => {
//   return (
//     <div>
//       <label htmlFor="airline-select">Show routes on</label>
//       <select onChange={handleOnSelectAirline} id="airline-select">
//         <option value="all">All airlines</option>
//         {airlines.map(airline => <option value={airline.name}>{airline.name}</option>)}
//       </select>
//     </div>
//   )
// }


// }



const Select = ({ id, options, valueKey, titleKey, allTitle, value, onSelect }) => {
  const handleSelect = (event) => {
    event.preventDefault()
    onSelect(event)
  }

  //set disabled attribute for airports/airlines that will result in empty array

  return (
      <select id={id} value={value} onChange={handleSelect}>
        <option key={allTitle} value={allTitle}>{allTitle}</option>
        {options.map(selectOption => {
          return (
            <option disabled={selectOption.disabled} value={selectOption[valueKey]} key={selectOption[valueKey]}>{selectOption[titleKey]}</option>
          )
          })
      }
      </select>
  )
}

export default Select;