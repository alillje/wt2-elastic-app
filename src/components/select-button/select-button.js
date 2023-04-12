import './select-button.css'
import { useDispatch } from 'react-redux'
import { setDataToView } from '../../redux/reducers/data'

/**
 * Select Button Component.
 * Gives user ability to select an option.
 *
 * @returns {React.ReactElement} - Select Button Component.
 */
const SelectButton = ({ buttonText = 'Button text', buttonProp }) => {
  const dispatch = useDispatch()
  /**
   *
   */
  const setViewData = () => {
    dispatch(
      setDataToView({
        dataToView: buttonProp
      })
    )
  }
  return (
    <div className="select-button-container" onClick={setViewData}>{buttonText}</div>
  )
}

export default SelectButton
