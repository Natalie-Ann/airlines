import React from 'react'

const Map = ( { filteredRoutes, filteredAirports } ) => {
  return (
    <svg className="map" viewBox="-180 -90 360 180">
      <g transform="scale(1 -1)">
        <image xlinkHref="equirectangular_world.jpg" href="equirectangular_world.jpg" x="-180" y="-90" height="100%" width="100%" transform="scale(1 -1)"/>
      {filteredRoutes.map(route => {
        //get airport coordinates for source and destination
        let sourceAirport = filteredAirports.find(airport => airport.code === route.src);
        let sourceLat = sourceAirport.lat;
        let sourceLong = sourceAirport.long;

        let destAirport = filteredAirports.find(airport => airport.code === route.dest)
        let destLat = destAirport.lat;
        let destLong = destAirport.long;

        return (
          <g key={route.airline + route.src + route.dest}>
          <circle className="source" cx={sourceLong} cy={sourceLat}>
            <title>{sourceAirport.name}</title>
          </circle> 
          <circle className="destination" cx={destLong} cy={destLat}>
            <title>{destAirport.name}</title>
          </circle>
          <path d={`M${sourceLong} ${sourceLat} L ${destLong} ${destLat}`} />
        </g>
        )
    })}
    
  </g>
</svg>

  )
}

export default Map;