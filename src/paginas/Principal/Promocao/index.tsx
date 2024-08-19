import { Link } from "react-router-dom";
import Botao from "../../../componentes/Botao";
import Cartao from "../../../componentes/Cartao";

export default function Promocao()
{
   return (
      <main>
         <section>
            <div className="vs-conteiner">
               <div className="mt30 mb30">
                  <Cartao titulo="Página de promoção"/>
               </div>               
               <div className="largura-botao">
                  <Link to="/inscricao">
                     <Botao texto="Quero participar"/>
                  </Link>
               </div>                                              
            </div>            
         </section>
      </main>      
   );
}