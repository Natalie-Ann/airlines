import React from 'react';
import { useEffect, useState } from 'react'
import './App.css';
import Table from './components/Table'
import { getAirlineById, getAirportByCode, airlines, routes, airports } from './data'

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
  const [currentPage, setCurrentPage] = useState(1);
  // const [currentGroup, setCurrentGroup] = useState(initialGroups[0])


  const previousPageHandler = (event) => {
    console.log('previous page')
    setCurrentPage(currentPage - 1);
  }
  
  const nextPageHandler = (event) => {
    console.log('next page')
    setCurrentPage(currentPage + 1);
  }

  return (
  <div className="app">
    <header className="header">
    <h1 className="title">Airline Routes</h1>
    </header>
    <section>
      <img className="map" alt="world" src="equirectangular_world.jpg"></img>
      <Table classname="routes-table" columns={columns} rows={selectedRoutes} format={formatValue} currentPage={currentPage} previousPageHandler={previousPageHandler} nextPageHandler={nextPageHandler} />
    </section>

  </div>
)
}

export default App;