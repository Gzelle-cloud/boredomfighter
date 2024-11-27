import './App.css';
import WhenImBored from './WhenImBored';
import video from "./video1.mp4";

function App() {

  return (
    <>
      <video autoPlay muted loop>    
        <source src={video} type="video/mp4" />    
      </video>
      <div className='container'>
        <h1>Feeling bored? No problem! 🎉</h1>
      </div>
      <div className='container'>
        <p>We’ve got plenty of creative, fun, and exciting activities to inspire you. Whether you’re alone or with friends, indoors or out, we’ll help you find something to do that suits your mood.</p>
      </div>      
      <div className='container'>
        <p>Just click Get Started and let the ideas roll in!</p>
      </div>
      <div className='container'>
        <WhenImBored />
      </div>
    </>
  )
}

export default App
