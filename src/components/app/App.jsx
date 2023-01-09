import './App.css';
import Header from '.././Header/Header'
import Main from '.././Main/Main'
import Footer from '../Footer/Footer';
import Table from '../Table/Table';
import Exersize from '../Exersize/Exersize';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="app-wrapper">
          <Routes>
           <Route path='/Main' element={<Main/>}/>
           <Route path='/Table' element={<Table/>}/>
           <Route  path='/Exersize'element={<Exersize/>}/>    
          </Routes>      
        </div>
        <Footer />
 

      </div>
    </BrowserRouter>
  );
}

export default App;
