import React from 'react';

const Table = ( {previousPageHandler, nextPageHandler, currentPage, rows, columns, format, perPage = 25 }) => {

  let groups = ((routes) => {
    let routesCopy = routes.slice();
    let groups = [];
    while (routesCopy.length > 0) {
      groups.push(routesCopy.splice(0, perPage))
    }
    return groups
  })(rows);

  const calculateRowNumbers = (currentPage) => {
    return `${1*currentPage}-${perPage*currentPage}`
  }
  

  return (
    <div>
      <table className="routes-table">
        <thead>
          <tr>
            {columns.map(column => <th key={column.property}>{column.name}</th>)}
          </tr>
        </thead>
        <tbody>
          <TableData rows={rows} format={format} groups={groups} currentPage={currentPage}/>
        </tbody>
      </table>
      <div className="pagination">
          <p>{`Showing ${calculateRowNumbers(currentPage)} of ${rows.length} total routes`}</p>
          <p>
            <button onClick={previousPageHandler}>Previous Page</button> <button onClick={nextPageHandler}>Next Page</button>
          </p>
        </div>
    </div>
  )
}

const TableData = ( { rows, format, groups, currentPage }) => {

    return (
    <>
    {groups[currentPage - 1].map(row =>
    <tr key={`${row.airline}-${row.src}-${row.dest}`}>
      <td>{format('airline', row.airline)}</td>
      <td>{format('airport', row.src)}</td>
      <td>{format('airport', row.dest)}</td>
      </tr>)}
    </>
  )


}

export default Table;