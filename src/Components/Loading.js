import React from 'react'
import loading from '../loading.gif'

export default function Loading() {
  return (
    <div style={{margin:'30vh 40vw'}}>
      <img src={loading} alt="Loading..." />
    </div>
  )
}
