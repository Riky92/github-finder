import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NavBar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Alert from './components/layout/Alert'
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import About from './pages/About';
import User from './pages/User';

import { GitHubProvider} from './context/git_hub/GitHubContext'
import { AlertProvider} from './context/alert/AlertContext'



function App() {
  return (
    <GitHubProvider>
      <AlertProvider>
        <Router>
          <div className='flex flex-col justify-between h-screen'>
            <NavBar/>
            <main className='container mx-auto px-3 pb-12'>
            <Alert />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/user/:login' element={<User />} />
              <Route path='/not-found' element={<NotFound />} />
            </Routes>
            </main>
            <Footer/>
          </div>
        </Router>
        </AlertProvider>
    </GitHubProvider>
    
  );
}

export default App;
