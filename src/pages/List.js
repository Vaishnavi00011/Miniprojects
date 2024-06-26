import React from 'react'
import MapFunc from './MapFunc'


function List() {
    let list1 = ["Ashu", "Samyak", "Anshul"]
    let list2 = [22,44,55,66,8]
  return (
    <div>
        <MapFunc list={list1}></MapFunc>
        <MapFunc list={list2}></MapFunc>

    </div>
  )
}

export default List