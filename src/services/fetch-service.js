/**
 * Fetch service module
 * Handles the calls to the API.
 * All methods returns undefined if error occurs, component error handling.
 *
 * @author Andreas Lillje <a.lillje@gmail.com>
 */

/**
 * Gets created at stats.
 *
 * @returns {object} - The recieved json data object.
 */
export const getCreatedAtStats = async () => {
  const url = `${process.env.REACT_APP_API_URL}/stats/created`
  console.log(url)
  try {
    const response = await fetch(url)
    console.log(response)
    const json = await response.json()
    if (response.ok) {
      return json.createdAt
    }
  } catch (e) {
    console.log(e)
    throw new Error('Unable to retrieve created at data.', e.message)
  }
}

/**
 * Gets language stats stat
 *
 * @returns {object} - The recieved json data object.
 */
export const getLanguageStats = async () => {
  const url = `${process.env.REACT_APP_API_URL}/stats/language`
  try {
    const response = await fetch(url, {
      mode: 'no-cors'
    })
    console.log(response)
    const json = await response.json()
    if (response.ok) {
      return json.languages
    }
  } catch (e) {
    console.log(e)
    throw new Error('Unable to retrieve language data.', e.message)
  }
}

/**
 * Gets type stats.
 *
 * @returns {object} - The recieved json data object.
 */
export const getTypeStats = async () => {
  const url = `${process.env.REACT_APP_API_URL}/stats/type`
  console.log(url)
  try {
    const response = await fetch(url)
    console.log(response)
    const json = await response.json()
    if (response.ok) {
      return json.types
    }
  } catch (e) {
    console.log(e)
    throw new Error('Unable to retrieve language data.', e.message)
  }
}
