import './App.css'
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Sobreloja from './componentes/Sobreloja';
import Produtos from './componentes/Produtos';
import Localizacao from './componentes/Localizacao'

function App() {
    return(
        <main>
        <Header/>
        <Sobreloja/>
        <Produtos/>
        <Localizacao/>
        <Footer/>
        </main>
    )
  
}

export default App
