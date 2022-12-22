import { Navbar } from "./components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from "./components/Body/ItemListContainer";

function App() {



  return (
    <div>
        <Navbar />
        <ItemListContainer greetings='Saludos. Bienvenidos a mi tienda Virtual'/>
    </div>
  );
}

export default App;
  