import './styles.css';

type Props =
{
   texto: string;
} 

export default function Botao({texto}: Props)
{
   return (
      <>
         <div className="vs-botao">
            {texto}
         </div>
      </>      
   );
}