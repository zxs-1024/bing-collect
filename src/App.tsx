import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import Container from './pages/Container'
import Details from './pages/Details'
import History from './pages/History'
import HistoryByMonth from './pages/HistoryByMonth'

const App: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <Route exact path="/" component={Container} />
        <Route path="/story/:id" component={Details} />
        <Route path="/history" component={History} />
        <Route path="/month/:month" component={HistoryByMonth} />
      </MainLayout>
    </Router>
  )
}

export default App
