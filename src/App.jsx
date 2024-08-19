import './App.css';
import { Outlet } from "react-router-dom"
import Header from './components/common/Header'
import Footer from './components/common/Footer';

function App() {
  

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
