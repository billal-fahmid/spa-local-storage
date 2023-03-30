import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';
import SideCard from './components/SideCard/SideCard';
import Home from './components/Home/Home';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [watchTime , setWatchTime ] = useState('');
  console.log(watchTime)
  const handleWatchTime = (watchTime) =>{
    const previousWatchTime = JSON.parse(localStorage.getItem('watchTime'));
    console.log(previousWatchTime)
    if(previousWatchTime){
      const sum = previousWatchTime + watchTime;
      localStorage.setItem('watchTime' , sum)
      setWatchTime(sum)
    }else{
      localStorage.setItem('watchTime' , watchTime)
      setWatchTime(watchTime)
    }
  }

  return (
    <div className="App">
      <div>
        <Header></Header>
      </div>

      <div className="main row">

        <div className="main-container col-md-8">
          <Home handleWatchTime= {handleWatchTime}></Home>
        </div>

        <div className="side-card col-md-4 card">
          <SideCard watchTime = {watchTime}></SideCard>
        </div>

      </div>

      <Contact></Contact>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
