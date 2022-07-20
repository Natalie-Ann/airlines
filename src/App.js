import React from 'react';
import { useEffect, useState } from 'react'
import './App.css';
import data from './data'
import Table from './components/Table'

const getAirlineById = data.getAirlineById;
const getAirportByCode = data.getAirportByCode;

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
  const [routes, setRoutes] = useState(data.routes);

  return (
  <div className="app">
    <header className="header">
    <h1 className="title">Airline Routes</h1>
    </header>
    <section>
      <img className="map" alt="world" src="equirectangular_world.jpg"></img>
      <Table classname="routes-table" columns={columns} rows={routes} format={formatValue} />
    </section>
  </div>
)
}

export default App;