import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import Container from './components/Container/index'
import Details from './pages/Details'

const App: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <Route exact path="/" component={Container} />
        <Route path="/details" component={Details} />
      </MainLayout>
    </Router>
  )
}

export default App
