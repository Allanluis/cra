import './App.css'
import './styles.css'
import { Cardapio } from "./components/cardapio"
import  Compos from "./components/loja"
function App() {

  return (
    <>
      {/* Ícones das redes sociais */}
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/allan-matriz-taquara-undefined-67a9282aa/" target="_blank"><i className="fab fa-linkedin"></i></a>
        <a href="https://github.com/Allanluis?tab=repositories" target="_blank"><i className="fas fa-globe"></i></a>
        <a href="https://github.com/Allanluis" target="_blank"><i className="fab fa-github"></i></a>
        <a href="https://www.instagram.com/021.allan.moquedace/" target="_blank"><i className="fab fa-instagram"></i></a>
        
      </div>
      
      <div class="titulo-Cardapio"> 
      <h2>  Joelma`s Coiffer</h2>
      </div>
      
      <div class="menu-container">            
            <Cardapio />
            <Compos/>
      </div>

      <footer>
        Desenvolvido por <a href="https://github.com/sammyfreitas/portfolioSite" target="_blank">Anthony Freitas</a>, no Curso de Programador FrontEnd do Senai (2025) Todos os direitos reservados
      </footer>
    </>
  )
}

export default App;
