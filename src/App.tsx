import Home from './pages/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}
