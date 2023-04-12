/**
 * Fetch service module
 * Handles the calls to the API.
 * All methods returns undefined if error occurs, component error handling.
 *
 * @author Andreas Lillje <a.lillje@gmail.com>
 */

/**
 * Gets created at stat
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
