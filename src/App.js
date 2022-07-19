// import React, { Component } from 'react';
// import './App.css';

// const App = () => (
//   <div className="app">
//   <header className="header">
//     <h1 className="title">Airline Routes</h1>
//   </header>
//   <section>
//     <p>
//       Welcome to the app!
//     </p>
//   </section>
// </div>
// )

// export default App;

import React from 'react';
import { useEffect, useState } from 'react'
import './App.css';
import data from './data'

const TableData = ( {airlinesList, airportsList, routesList}) => {
  const findAirlineNameById = (airlineId) => {
    let airline = airlinesList.find(airline => airline.id === airlineId);
    return airline.name;
  }

  const findAirport = (airportCode) => {
    let airport = airportsList.find(airport => airport.code === airportCode);
    return airport.name;
  }

  return (
    <>
    {routesList.map(route =>
    <tr key={route.id}>
      <td>{findAirlineNameById(route.airline)}</td>
      <td>{findAirport(route.src)}</td>
      <td>{findAirport(route.dest)}</td>
      </tr>)}
    </>
  )

}

const Table = ( {airlinesList, airportsList, routesList }) => {
  return (
    <div>
      <table className="routes-table">
        <thead>
          <tr>
            <th>Airline</th>
            <th>Source Airport</th>
            <th>Destination Airport</th>
          </tr>
        </thead>
        <tbody>
          <TableData airlinesList={airlinesList} airportsList={airportsList} routesList={routesList}/>
        </tbody>

      </table>
    </div>
  )
}

const App = () => {

  const [airlines, setAirlines] = useState(data.airlines);
  const [airports, setAirports] = useState(data.airports);
  const [routes, setRoutes] = useState(data.routes);

  return (
  <div className="app">
  <header className="header">
    <h1 className="title">Airline Routes</h1>
  </header>
  <section>
    <Table airlinesList={airlines} airportsList={airports} routesList={routes}/>
  </section>
</div>
)
}

export default App;