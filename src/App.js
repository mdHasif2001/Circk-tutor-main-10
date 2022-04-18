import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import BLog from './Pages/Blog/BLog';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>

        <Route path='/blog' element={<BLog></BLog>}></Route>
          <Route  path='/about' element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
