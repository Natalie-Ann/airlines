import React from 'react';
import { useState } from 'react';

const Table = ( { rows, columns, format, perPage = 25 }) => {

  const [currentPage, setCurrentPage] = useState(1);

  const previousPageHandler = (event) => {
    console.log('previous page')
    setCurrentPage(currentPage - 1);
  }
  
  const nextPageHandler = (event) => {
    console.log('next page')
    setCurrentPage(currentPage + 1);
  }

  let groups = ((routes) => {
    let routesCopy = routes.slice();
    let groups = [];
    while (routesCopy.length > 0) {
      groups.push(routesCopy.splice(0, perPage))
    }
    return groups
  })(rows);

  const calculateRowNumbers = (currentPage) => {
    let end = perPage * currentPage;
    let start = end - 24;
    return `${start}-${end}`
  }

  const toggleNextPageDisabled = () => {
    return currentPage === groups.length;
  }

  const togglePrevPageDisabled = () => {
    return currentPage === 1;
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
            <button disabled={togglePrevPageDisabled()} onClick={previousPageHandler}>Previous Page</button> <button disabled={toggleNextPageDisabled()} onClick={nextPageHandler}>Next Page</button>
          </p>
        </div>
    </div>
  )
}

const TableData = ( { format, groups, currentPage }) => {

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