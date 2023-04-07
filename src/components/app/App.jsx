import styles from './App.css';
import Header from '.././header/Header'
import Main from '../main/Main'
import Footer from '../footer/Footer';
import TablePage from '../tablePage/TablePage';
import Game from '../game/Game';
import Notfound from '../notFound/Notfound';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  
   
    
    return (

    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="app-wrapper">
          <Routes>
           <Route path='/main' element={<Main/>}/>
           <Route path='/tablePage' element={<TablePage/>}/>
           <Route  path='/game' element= { <Game />}/>
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
