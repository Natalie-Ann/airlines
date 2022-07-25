import React from 'react'

const Select = ({ id, options, valueKey, titleKey, allTitle, value, onSelect }) => {
  const handleSelect = (event) => {
    event.preventDefault()
    onSelect(event)
  }

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