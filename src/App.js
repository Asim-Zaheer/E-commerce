import './App.css';
import Home from './component/Home';
import NAvbar from './component/NAvbar';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import Product from './component/Product';
import Single from './component/Single';
function App() {
  return (
    <>
    <BrowserRouter>
    <NAvbar/>

     <Routes>
      <Route exact path='/' Component={Home} />
      <Route  exact path='/product' Component={Product} />
      // <Route exact path='/product/:id' Component={Single} />
     
     </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
