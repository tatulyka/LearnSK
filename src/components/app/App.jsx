import './App.css';
import Header from '.././Header/Header'
import Main from '.././Main/Main'
import Footer from '../Footer/Footer';
import TablePage from '../TablePage/TablePage';
import Exercise from '../Exercise/Exercise';
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
          </Routes>      
        </div>
        <Footer />
        

      </div>
    </BrowserRouter>
  );
}

export default App;
