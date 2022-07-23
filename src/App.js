import React from 'react';
import { useState } from 'react'
import './App.css';
import Table from './components/Table'
import { getAirlineById, getAirportByCode, airlines, routes, airports } from './data'
import Select from './components/Select'

const App = () => {
  const [selectedAirlineNumber, setSelectedAirline] = useState('All Airlines');
  const [selectedAirport, setSelectedAirport] = useState('All Airports')

  const columns = [
    {name: 'Airline', property: 'airline'},
    {name: 'Source Airport', property: 'src'},
    {name: 'Destination Airport', property: 'dest'},
  ];
  
  const formatValue = (property, value) => {
    if (property === 'airline') {
      return getAirlineById(value);
    } else {
      return getAirportByCode(value)
    }
  }

  let filteredAirlines = airlines;
  let filteredAirports = airports;

  const handleOnSelectAirline = (event) => {
    console.log(event.target.value)
    if (event.target.value === 'All Airlines') {
      setSelectedAirline(event.target.value)
    } else {
      let numberValue = Number(event.target.value)
      setSelectedAirline(numberValue)
    }
  }

  const handleOnSelectAirport = (event) => {
    console.log(typeof event.target.value)

    if (event.target.value === 'All Airports') {
      setSelectedAirport('All Airports')
    } else {
      setSelectedAirport(event.target.value)
    }
  }

  let filteredRoutes = routes.filter(route => {
    // if (selectedAirlineNumber === 'All Airlines') {
    //   return route.src === selectedAirport || route.dest === selectedAirport
    // } else if 
    return (route.airline === selectedAirlineNumber || route.src === selectedAirport || route.dest === selectedAirport)
  });

  const clearFilters = () => {
    setSelectedAirline('All Airlines')
    setSelectedAirport('All Airports')
  }

  return (
  <div className="app">
    <header className="header">
    <h1 className="title">Airline Routes</h1>
    </header>
    <section>
      <img className="map" alt="world" src="equirectangular_world.jpg"></img>
      {/* <Select airlines={airlines} handleOnSelectAirline={handleOnSelectAirline} /> */}
      <div>
      <label htmlFor="airline-select">Show routes on</label><Select id="airline-select" options={filteredAirlines} valueKey="id" titleKey="name" allTitle="All Airlines" value={selectedAirlineNumber} onSelect={handleOnSelectAirline} />
      <label htmlFor="airport-select">flying in or out of</label><Select id="airport-select" options={filteredAirports} valueKey="code" titleKey="name" allTitle="All Airports" value={selectedAirport} onSelect={handleOnSelectAirport}/>
      </div>
      <button onClick={clearFilters}>Clear filters</button>
      <Table classname="routes-table" columns={columns} rows={filteredRoutes.length > 0? filteredRoutes : routes} format={formatValue} />
    </section>

  </div>
)
}

export default App;