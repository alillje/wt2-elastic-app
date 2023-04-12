import './select-button.css'
import { useState, useEffect } from 'react'

/**
 * Select Button Component.
 * Gives user ability to select an option.
 *
 * @returns {React.ReactElement} - Select Button Component.
 */
const SelectButton = ({ buttonText = 'Button text' }) => {
  return (
    <div className="select-button-container">{buttonText}</div>
  )
}

export default SelectButton
