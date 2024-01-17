import './App.css';
import Header from './pages/header'
import Stories from './pages/stories'
import Footer from './pages/footer'
import Timeline from './pages/timeline'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    
      <Routes>
    <Route path='/' element = {<div className='container'>
      <Header/>
      <Stories/>
      <Footer/>
      <Timeline/>
      </div>}>
    </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
