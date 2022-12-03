import { BrowserRouter,  Route } from 'react-router-dom'
import GlobalStyles from '../styles/global'
import Main from '../components/pages/Main'
import Card from '../components/pages/Card'
import Finish from '../components/pages/Finish'

const Router = () => {
  return (
      <BrowserRouter>
        <GlobalStyles />
          <Route exact path="/" component={Main}/>
          <Route path="/cart" component={Card} />
          <Route path='/finish' component={Finish} />
      </BrowserRouter>
  )
}

export default Router