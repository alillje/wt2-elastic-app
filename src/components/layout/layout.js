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
const Layout = ({ main, bottom }) => {
  return (
     <div className="layoutContainer">
                <div className="layoutTop">
                    Top Github Repositories (2022)
                </div>
                <div className="layoutLeft">
                </div>
                <div className="layoutMain" >
                {main}
                </div>
                <div className="layoutRight">
                </div>
                <div className="layoutBottom">
                    {bottom}
                </div>
    </div>
  )
}

export default Layout
