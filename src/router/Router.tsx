import { BrowserRouter,  Route } from 'react-router-dom'
import GlobalStyles from '../styles/global'
import Main from '../components/pages/Main'
import Card from '../components/pages/Card'

const Router = () => {
  return (
      <BrowserRouter>
        <GlobalStyles />
          <Route exact path="/" component={Main}/>
          <Route path="/card" component={Card} />
      </BrowserRouter>
  )
}

export default Router