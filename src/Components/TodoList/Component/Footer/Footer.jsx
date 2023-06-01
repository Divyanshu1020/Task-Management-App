import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
    <div className='row'>
      <label htmlFor="all">
        <input
          className='checkbox'
          type="checkbox"
          name='all'
          id='all' />
        All
      </label>
      <p>You have 0 to do</p>
      <button id='delete'>Delete</button>
    </div>
  )
}
