import React from 'react';

const Table = ( {routesList, getAirlineById, getAirportByCode, columns }) => {
  return (
    <div>
      <table className="routes-table">
        <thead>
          <tr>
            {/* {columns.map(column => <th>{column.name}</th>)} */}
            <th>Airline</th>
            <th>Source Airport</th>
            <th>Destination Airport</th>
          </tr>
        </thead>
        <tbody>
          <TableData routesList={routesList} getAirlineById={getAirlineById} getAirportByCode={getAirportByCode}/>
        </tbody>

      </table>
    </div>
  )
}

const TableData = ( { routesList, getAirlineById, getAirportByCode }) => {

  return (
    <>
    {routesList.map(route =>
    <tr key={route.id}>
      <td>{getAirlineById(route.airline)}</td>
      <td>{getAirportByCode(route.src)}</td>
      <td>{getAirportByCode(route.dest)}</td>
      </tr>)}
    </>
  )

}

export default Table;