import './button-wrapper.css'
import React from 'react'
import SelectButton from '../select-button/select-button.js'

/**
 * Select Button Component.
 * Gives user ability to select an option.
 *
 * @returns {React.ReactElement} - Select Button Component.
 */
const ButtonWrapper = () => {
  const buttonData = [
    {
      buttonText: 'Year of creation',
      buttonProp: 'createdat'
    },
    {
      buttonText: 'Languages used',
      buttonProp: 'language'
    },
    {
      buttonText: 'Type of repository',
      buttonProp: 'type'
    }
  ]
  return (
    <div className="button-wrapper-container">

      {buttonData.map(button => {
        return (
          <SelectButton key={button.buttonProp} buttonText={button.buttonText} buttonProp={button.buttonProp} />
        )
      })}
    </div>
  )
}

export default ButtonWrapper
