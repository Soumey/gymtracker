import './App.css';
import PeakMale from './assets/PeakMale.png';
import { Link } from 'react-router-dom';

function App() {



  return (

    <div 
        className='p-5 text-center bg-dark container-fluid'
        style={{ height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        backgroundImage:`url(${PeakMale})`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'}}
      >
        <Link to='/Home'><div className='mask w-75 p-3 h-75 mask-hover mx-auto' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', borderRadius:50,marginTop:130 }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Track Your Gym Progress with GymTracker</h1>
              <h4 className='mb-3'>Stay on top of your fitness journey with our easy-to-use app.</h4>
            </div>
          </div>
        </div>
        </Link>
      </div>
  );
}

export default App;
