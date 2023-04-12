import './stats-displayer.css'
import { useState, useEffect } from 'react'
import { getCreatedAtStats } from '../../services/fetch-service'

/**
 * Stats Displayer Component.
 * Displays stats.
 *
 * @returns {React.ReactElement} - Layout Component.
 */
const StastsDisplayer = ({ stat = 'createdat' }) => {
  // const [stats, setStats] = useState([])

  /**
   * Calls the getCreatedAtStats function from fetch-service.js
   */
  const getStats = async () => {
    const stats = await getCreatedAtStats()
    console.log(stats)
    // setStats(stats)
  }
  useEffect(() => {
    getStats()
  }, [])

  return (
     <div className="stats-displayer-container">
    </div>
  )
}

export default StastsDisplayer
