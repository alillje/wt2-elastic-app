import './App.css'
import ButtonWrapper from './components/button-wrapper/button-wrapper.js'
import Layout from './components/layout/layout.js'
import StatsDisplayer from './components/stats-displayer/stats-displayer.js'

/**
 * Application starting point.
 */
function App () {
  return (
    <div>
    <Layout main={<StatsDisplayer />} bottom={<ButtonWrapper />}>
      </Layout>
      </div>
  )
}

export default App
