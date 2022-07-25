import React from 'react';
import { useState } from 'react'
import './App.css';
import Table from './components/Table'
import { getAirlineById, getAirportByCode, airlines, routes, airports } from './data'
import Select from './components/Select'
import Map from './components/Map';

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

  let filteredRoutes = routes.filter(route => {
    if (selectedAirlineNumber !== 'All Airlines' && selectedAirport !== 'All Airports') {
      return ((route.src === selectedAirport || route.dest === selectedAirport) && route.airline === selectedAirlineNumber)
    } else if (selectedAirlineNumber === 'All Airlines' && selectedAirport !== 'All Airports') {
      return route.src === selectedAirport || route.dest === selectedAirport
    } else if (selectedAirlineNumber !== 'All Airlines' && selectedAirport === 'All Airports') {
      return route.airline === selectedAirlineNumber
    }
    return route;
  });

  let filteredAirlines = airlines.map(airline => {
    if (selectedAirlineNumber === 'All Airlines' && selectedAirport === 'All Airports') {
      airline.disabled = false;
      //or if airline is not included in filteredRoutes
    } else if (!filteredRoutes.map(route => route.airline).includes(airline.id)) {
      airline.disabled = true;
    } 
    return airline
  });

  let filteredAirports = airports.map(airport => {
    if (selectedAirport === 'All Airports' && selectedAirlineNumber === 'All Airlines') {
      airport.disabled = false;
    } else if (!filteredRoutes.map(route => route.src).includes(airport.code) && !filteredRoutes.map(route => route.dest).includes(airport.code)) {
      airport.disabled = true;
    }
    return airport
  });

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
    console.log(event.target.value)

    if (event.target.value === 'All Airports') {
      setSelectedAirport('All Airports')
    } else {
      setSelectedAirport(event.target.value)
    }
  }

  const clearFilters = () => {
    setSelectedAirline('All Airlines')
    setSelectedAirport('All Airports')
  }

  console.log(filteredRoutes);

  return (
  <div className="app">
    <header className="header">
    <h1 className="title">Airline Routes</h1>
    </header>
    <section>
      <Map filteredRoutes={filteredRoutes} filteredAirports={filteredAirports}/>
      <div>
      <label htmlFor="airline-select">Show routes on</label><Select id="airline-select" options={filteredAirlines} valueKey="id" titleKey="name" allTitle="All Airlines" value={selectedAirlineNumber} onSelect={handleOnSelectAirline} />
      <label htmlFor="airport-select">flying in or out of</label><Select id="airport-select" options={filteredAirports} valueKey="code" titleKey="name" allTitle="All Airports" value={selectedAirport} onSelect={handleOnSelectAirport}/>
      <button onClick={clearFilters}>Clear Filters</button>
      </div>
      <Table classname="routes-table" columns={columns} rows={filteredRoutes} format={formatValue} />
    </section>

  </div>
)
}

export default App;