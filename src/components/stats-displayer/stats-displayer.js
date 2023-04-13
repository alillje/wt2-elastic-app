import './stats-displayer.css'
import { React, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getCreatedAtStats, getLanguageStats, getTypeStats, getNumberOfDocuments } from '../../services/fetch-service'
import { Chart, registerables } from 'chart.js'
import { Bar } from 'react-chartjs-2'
/**
 * Stats Displayer Component.
 * Displays stats.
 * @returns {React.ReactElement} - Select Button Component.
 */
const StatsDisplayer = () => {
  Chart.register(...registerables)
  const stat = useSelector(state => state.data.dataToView)
  const [stats, setStats] = useState({})
  const [label, setLabel] = useState('')
  const [documentCount, setDocumentCount] = useState(0)

  /**
   * Fired on inital render.
   */
  useEffect(() => {
    /**
     * Gets the document count.
     */
    const getDocumentCount = async () => {
      const data = await getNumberOfDocuments()
      setDocumentCount(data)
    }
    getDocumentCount()
  }, [])

  /**
   * Fired when 'stat' is updated.
   */
  useEffect(() => {
    if (stat === 'createdat') {
    /**
     * Gets the data for the created at stats.
     */
      const getYearCreatedAt = async () => {
        const data = await getCreatedAtStats()
        setStats(data)
      }
      setLabel('Creation Year')
      getYearCreatedAt()
    } else if (stat === 'language') {
      /**
       * Gets the data for the language stats.
       */
      const getLanguageData = async () => {
        const data = await getLanguageStats()
        setStats(data)
      }
      setLabel('Used Languages')
      getLanguageData()
    } else if (stat === 'type') {
      /**
       * Gets the data for the type stats.
       */
      const getTypeData = async () => {
        const data = await getTypeStats()
        setStats(data)
      }
      setLabel('Type of repository')
      getTypeData()
    }
  }, [stat])

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
        <div className="stats-displayer-info"><div>This application displays data about the Top 1000 NodeJS GitHub Repositories (2022). Please choose an option to display some statistical data.</div> <div><i>(NOTE: The dataset actually contains information about the top {documentCount} repositories. )</i></div></div>
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
