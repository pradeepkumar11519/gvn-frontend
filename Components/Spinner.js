import React from 'react'
import GridLoader
from 'react-spinners/GridLoader'
export default function Spinner() {
  return (
    <div className='mx-auto my-auto'>
      <GridLoader color={'black'} />
    </div>
  )
}
