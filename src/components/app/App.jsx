import './App.css';
import Header from '.././header/Header'
import Main from '.././Main/Main'
import Footer from '../footer/Footer';
import TablePage from '../TablePage/TablePage';
import Exercise from '../exercise/Exercise';
import Notfound from '../notFound/Notfound';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="app-wrapper">
          <Routes>
           <Route path='/Main' element={<Main/>}/>
           <Route path='/TablePage' element={<TablePage/>}/>
           <Route  path='/Exercise' element={<Exercise/>}/>
           <Route  exact path='/' element={<Main/>}/>
           <Route  path='*' element={<Notfound/>}/>
          </Routes>      
        </div>
        <Footer />
        

      </div>
    </BrowserRouter>
  );
}

export default App;
