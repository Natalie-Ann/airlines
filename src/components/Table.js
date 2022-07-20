import React from 'react';

const Table = ( {rows, getAirlineById, getAirportByCode, columns, format }) => {
  return (
    <div>
      <table className="routes-table">
        <thead>
          <tr>
            {columns.map(column => <th key={column.property}>{column.name}</th>)}
          </tr>
        </thead>
        <tbody>
          <TableData rows={rows} getAirlineById={getAirlineById} getAirportByCode={getAirportByCode} format={format}/>
        </tbody>

      </table>
    </div>
  )
}

const TableData = ( { rows, getAirlineById, getAirportByCode, format }) => {

    return (
    <>
    {rows.map(row =>
    <tr key={row.id}>
      <td>{format('airline', row.airline)}</td>
      <td>{format('airport', row.src)}</td>
      <td>{format('airport', row.dest)}</td>
      </tr>)}
    </>
  )


}

export default Table;