import React from 'react'

function Icons(props) {
  return (
    <i style={{fontSize:25,color:`${props.color}`,}} className={`bi bi-${props.name}`}></i>
  )
}

export default Icons