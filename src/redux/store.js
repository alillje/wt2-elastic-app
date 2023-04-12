/**
 * Redux store module
 * Contains the redux store reducers
 *
 * @author Andreas Lillje <a.lillje@gmail.com>
 */

import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './reducers/data'

// Create a new store that stores all reducers
const store = configureStore({
  reducer: {
    data: dataReducer
  }
})

export default store
