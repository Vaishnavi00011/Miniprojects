import React from 'react'

function MapFunc({list}) {
  return (
    <div>
      {list.map((i)=>
    <li>{i}</li>
    )}
    </div>
  )
}

export default MapFunc