import './stats-displayer.css'
import { useState, useEffect } from 'react'
import { getCreatedAtStats, getLanguageStats, getTypeStats } from '../../services/fetch-service'
import { Chart, registerables } from 'chart.js'
import { Line, Bar } from 'react-chartjs-2'
/**
 * Stats Displayer Component.
 * Displays stats.
 *
 * @returns {React.ReactElement} - Layout Component.
 */
const StatsDisplayer = ({ stat }) => {
  Chart.register(...registerables)
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
      setLabel('Used Languages')
      getLanguageData()
    } else if (stat === 'type') {
      /**
       *
       */
      const getTypeData = async () => {
        const data = await getTypeStats()
        setStats(data)
      }
      setLabel('Type of repository')
      getTypeData()
    }
  }, [])

  if (stat) {
    return (
      <div className="stats-displayer-container">
         <Bar
          data={{
            labels: Object.keys(stats),
            datasets: [
              {
                label,
                data: Object.values(stats),
                backgroundColor: 'rgba(35, 183, 196, 0.2)',
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
  } else {
    return (
      <div className="stats-displayer-container">
        <div className="stats-displayer-info">This application displays data about the Top 1000 GitHub Repositories (2022). Please choose an option to display some statistical data. </div>
      </div>
    )
  }
}

export default StatsDisplayer

// LINE COMPONENTS

// return (
//   <div className="stats-displayer-container">
//     <Line
//       data={{
//         labels: Object.keys(stats),
//         datasets: [
//           {
//             label: label,
//             data: Object.values(stats),
//             fill: false,
//             backgroundColor: 'rgba(75,192,192,0.4)',
//             borderColor: 'rgba(75,192,192,1)'
//           }
//         ]
//       }}
//       options={{
//         scales: {
//           yAxes: [
//             {
//               ticks: {
//                 beginAtZero: true
//               }
//             }
//           ]
//         }
//       }}
//     />
//   </div>
// )
