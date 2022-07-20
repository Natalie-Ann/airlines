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

let initialGroups = ((routes) => {
  let routesCopy = routes.slice();
  let groups = [];
  while (routesCopy.length > 0) {
    groups.push(routesCopy.splice(0, 25))
  }
  return groups
})(routes);

const App = () => {
  const [selectedRoutes, setRoutes] = useState(routes);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentGroup, setCurrentGroup] = useState(initialGroups[0])

  const previousPageHandler = (event) => {
    console.log('previous page')
  }
  
  const nextPageHandler = (event) => {
    console.log('next page')
  }

  return (
  <div className="app">
    <header className="header">
    <h1 className="title">Airline Routes</h1>
    </header>
    <section>
      <img className="map" alt="world" src="equirectangular_world.jpg"></img>
      <Table classname="routes-table" columns={columns} rows={currentGroup} format={formatValue} />
      <div className="pagination">
        <p>{`Showing ${selectedRoutes.length} total routes`}</p>
        <p>
          <button onClick={previousPageHandler}>Previous Page</button> <button onClick={nextPageHandler}>Next Page</button>
        </p>
    </div>
    </section>

  </div>
)
}

export default App;