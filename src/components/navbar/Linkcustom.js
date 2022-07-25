import React from 'react'
import { NavLink } from 'react-router-dom'

function LinkCustom({ activeclassName, to, children, className }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? `${className} ${activeclassName}` : className)}
    >
      {children}
    </NavLink>
  )
}

export default LinkCustom