
/**
 * Redux data module.
 * Create a dataSlice slice with different actions
 *
 * @author Andreas Lillje <a.lillje@gmail.com>
 */

import { createSlice } from '@reduxjs/toolkit'

// Create a user slice with different actions
export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    dataToView: null
  },
  reducers: {
    /**
     * Sets all state variables to values defined in the action object.
     *
     * @param {object} state - Redux state object.
     * @param {object} action - Object containing the different state values to be set.
     */
    setDataToView: (state, action) => {
      state.dataToView = action.payload.dataToView
    },
    /**
     * Clears all state variables to values and sets the to initialState.
     *
     * @param {object} state - Redux state object.
     */
    clearDataToView: (state) => {
      state.dataToView = null
    }
  }
})

export const { setDataToView, clearDataToView } = dataSlice.actions
export default dataSlice.reducer
