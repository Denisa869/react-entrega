import { Navbar } from "./components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from "./components/Body/ItemListContainer";
import Nosotros from "./components/Nosotros/Nosotros";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/itemDetailContainer'

function App() {



  return (

    <BrowserRouter>
        <div>
          <Navbar />
          <br/>
          <h1 style={{textAlign: 'center'}}>Saludos. Bienvenidos a mi tienda Virtual</h1>
          <br/>
          <Routes>
              <Route path='/' element={ <ItemListContainer />}/>
              <Route path="/productos/:categoryId" element={<ItemListContainer />}/>
              <Route path='/nosotros' element={ <Nosotros /> }/>
              <Route path="/detail/:itemId" element={ <ItemDetailContainer /> }/>
              <Route path='*' element={ <Navigate to ={'/'} />} />

          </Routes>
         
    

          
      </div>
    </BrowserRouter>
  );


}

export default App;
  