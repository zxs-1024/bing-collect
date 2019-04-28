import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import Container from './pages/Container/index'
import Details from './pages/Details/index'

const App: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <Route exact path="/" component={Container} />
        <Route path="/details/:id" component={Details} />
      </MainLayout>
    </Router>
  )
}

export default App
