import './layout.css'
import * as React from 'react'

/**
 * Layout Component.
 * The main layout component.
 * Sets the page layout with CSS grid and inserts the children into the main HTML div element.
 *
 * @param {React.ReactElement} children - The React Element to insert into the component.
 * @returns {React.ReactElement} - Layout Component.
 */
const Layout = ({ children }) => {
  return (
     <div className="layoutContainer">
                <div className="layoutTop">
                    TOP
                </div>
                <div className="layoutLeft">
                    LEFT
                </div>
                <div className="layoutMain" >
                {children}
                </div>
                <div className="layoutRight">
                    RIGHT
                </div>
    </div>
  )
}

export default Layout
