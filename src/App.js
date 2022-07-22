import React from 'react';
import { useEffect, useState } from 'react'
import './App.css';
import Table from './components/Table'
import { getAirlineById, getAirportByCode, airlines, routes, airports } from './data'
import Select from './components/Select'

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

const App = () => {
  const [selectedRoutes, setSelectedRoutes] = useState(routes);

  const handleOnSelectAirline = (event) => {
    let selectedAirline = event.target.value;
    if (selectedAirline === 'all') {
      setSelectedRoutes(routes);
      return;
    }
    let airlineCode = airlines.find(airline => airline.name === selectedAirline).id;
    let filteredRoutes = routes.filter(route => route.airline === airlineCode);
    setSelectedRoutes(filteredRoutes)
  }

  return (
  <div className="app">
    <header className="header">
    <h1 className="title">Airline Routes</h1>
    </header>
    <section>
      <img className="map" alt="world" src="equirectangular_world.jpg"></img>
      <Select airlines={airlines} handleOnSelectAirline={handleOnSelectAirline} />
      {/* <Select options={filteredAirlines} valueKey="id" titleKey="name" allTitle="All Airlines" value={selectedAirline} onSelect={handleOnSelectAirline} /> */}
      <Table classname="routes-table" columns={columns} rows={selectedRoutes} format={formatValue} />
    </section>

  </div>
)
}

export default App;