import './stats-displayer.css'
import { useState, useEffect } from 'react'
import { getCreatedAtStats, getLanguageStats } from '../../services/fetch-service'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'
/**
 * Stats Displayer Component.
 * Displays stats.
 *
 * @returns {React.ReactElement} - Layout Component.
 */
const StatsDisplayer = ({ stat = 'language' }) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )
  const [stats, setStats] = useState({})
  const [label, setLabel] = useState('')

  useEffect(() => {
    if (stat === 'createdat') {
    /**
     *
     */
      const getYearCreatedAt = async () => {
        const data = await getCreatedAtStats()
        setStats(data)
      }
      setLabel('Creation Year')
      getYearCreatedAt()
    } else if (stat === 'language') {
      /**
       *
       */
      const getLanguageData = async () => {
        const data = await getLanguageStats()
        setStats(data)
      }
      setLabel('Used Language')
      getLanguageData()
    }
  }, [])

  return (
    <div className="stats-displayer-container">
      <Line
        data={{
          labels: Object.keys(stats),
          datasets: [
            {
              label: label,
              data: Object.values(stats),
              fill: false,
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)'
            }
          ]
        }}
        options={{
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }}
      />
    </div>
  )
}

export default StatsDisplayer
