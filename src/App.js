import React from 'react';
import { useEffect, useState } from 'react'
import './App.css';
import data from './data'
import Table from './components/Table'

const getAirlineById = data.getAirlineById;
const getAirportByCode = data.getAirportByCode;

const App = () => {
  const [routes, setRoutes] = useState(data.routes);

  const columns = [
    {name: 'Airline', property: 'airline'},
    {name: 'Source Airport', property: 'src'},
    {name: 'Destination Airport', property: 'dest'},
  ];

  return (
  <div className="app">
    <header className="header">
    <h1 className="title">Airline Routes</h1>
    </header>
    <section>
      <img className="map" alt="world" src="equirectangular_world.jpg"></img>
      <Table classname="routes-table" columns={columns} routesList={routes} getAirlineById={getAirlineById} getAirportByCode={getAirportByCode}/>
    </section>
  </div>
)
}

export default App;