import { Link } from "react-router-dom";
import Botao from "../../../componentes/Botao";
import Cartao from "../../../componentes/Cartao";

export default function Corpo()
{
   return (
      <main>
         <section>
            <div className="vs-conteiner">
               <div className="mt30 mb30">
                  <Cartao titulo="Página inicial"/>
               </div>               
               <div className="largura-botao">
                  <Link to="/promocao">
                     <Botao texto="Ver promoção"/>
                  </Link>
               </div>                                              
            </div>            
         </section>
      </main>      
   );
}