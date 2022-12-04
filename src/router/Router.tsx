import { Route } from 'react-router-dom'
import Main from '../components/pages/Main'
import Cart from '../components/pages/Cart'
import Finish from '../components/pages/Finish'

const Router = () => {
  return (
    <>  
      <Route exact path="/" component={Main}/>
      <Route path="/cart" component={Cart} />
      <Route path='/finish' component={Finish} />
    </>
  )
}

export default Router